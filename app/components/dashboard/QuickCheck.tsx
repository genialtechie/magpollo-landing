import { Paper, Divider } from '@mui/material';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useAtlasUser } from '@/context/UserContext';
import ProgressSpinner from './ProgressSpinner';
import Image from 'next/image';
import animation from '@/public/lotties/searching-files.json';
import { useError } from '@/context/ErrorContext';
import ButtonPrimary from '../shared/ButtonPrimary';
import ReplayIcon from '@mui/icons-material/Replay';

export async function fetcher(url: string) {
  const authKey = process.env.NEXT_PUBLIC_CARMD_AUTH_KEY;
  const partnerTkn = process.env.NEXT_PUBLIC_CARMD_PARTNER_TOKEN;
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `${authKey}`,
        'partner-token': `${partnerTkn}`,
      },
    });
    const data = await res.json();
    return { status: 'success', data: data.data };
  } catch (error) {
    return { status: 'failure', error };
  }
}

export default function QuickCheck() {
  const [result, setResult] = useState<string>('pending');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(() => {
    const item = localStorage.getItem('quickCheck');
    return item ? JSON.parse(item) : null;
  });
  const { user } = useAtlasUser();
  const { setError } = useError();

  useEffect(() => {
    localStorage.setItem('quickCheck', JSON.stringify(data));
    console.log(data ? data : 'no data');
  }, [data]);

  async function handleClick() {
    setLoading(!loading);
    try {
      // Check if user and user.cars are defined and user.cars is not empty
      if (user && user.cars && user.cars.length > 0) {
        const car = user.cars[0];
        const recallData = await fetcher(
          `https://api.carmd.com/v3.0/recall?year=${car.year}&make=${car.make}&model=${car.model}`
        );
        const maintData = await fetcher(
          `https://api.carmd.com/v3.0/maint?year=${car.year}&make=${car.make}&model=${car.model}&mileage=${car.mileage}`
        );

        if (recallData.data && maintData.data) {
          // add recall and maint data to local storage
          const dataObj = { recalls: recallData.data, maint: maintData.data };
          setData(dataObj);
        } else {
          setError(true);
          setResult('failure');
        }
      } else {
        // Handle the case where user or user.cars is undefined, or user.cars is empty
        console.error('User or user.cars is undefined, or user.cars is empty');
        setError(true);
        setResult('failure');
      }
    } catch (error) {
      setError(true);
      setResult('failure');
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <Paper
      className="p-5 max-w-md w-full rounded-xl"
      elevation={3}
    >
      <h1 className="text-xl font-bold font-serif text-left mb-2">
        Safety Check
      </h1>
      <Divider />
      <br />
      {!data && (result === 'failure' || result === 'pending') ? (
        <div>
          {!loading ? (
            <>
              <Image
                src="/car-check-icon.png"
                alt="car check icon"
                width={200}
                height={200}
                className="mx-auto"
              />
              <p className="text-center font-bold mt-3">
                Check your vehicle's safety status
              </p>
            </>
          ) : (
            <>
              <Lottie
                animationData={animation}
                className="mx-auto"
              />
              <p className="text-center font-bold mt-5">
                Checking your vehicle's safety status
              </p>{' '}
            </>
          )}
          <ul className="text-left text-sm mt-1 list-disc pl-3">
            <li>We check our databases for any recalls on your vehicle</li>
            <li>We check for manufacturer maintenance recommendations</li>
          </ul>
          {!loading && result === 'pending' && (
            <button
              className="mx-auto block mt-3 w-32 h-10 px-2 py-1 bg-primary border-white border-2 text-white rounded-lg hover:bg-white/50 hover:text-primary hover:border-primary transition-all duration-300 ease-in-out"
              onClick={handleClick}
              disabled={loading || !user?.cars}
            >
              Check Now
            </button>
          )}
        </div>
      ) : (
        <div>
          <div className="mb-2 flex items-center text-sm">
            <ProgressSpinner result="success" />{' '}
            <span className="ml-2">Found {data.recalls.length} recalls</span>
          </div>
          <div className="mb-2 flex items-center text-sm">
            <ProgressSpinner result="success" />{' '}
            <span className="ml-2">
              Found {data.maint.length} maintenance recommendations
            </span>
          </div>
          <p className="mb-3 font-bold">
            Check the maintenance tab for full details
          </p>
          <ButtonPrimary
            href="/dashboard/maint"
            className="mx-auto block text-center"
          >
            See Details
          </ButtonPrimary>
        </div>
      )}
    </Paper>
  );
}
