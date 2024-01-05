'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Paper } from '@mui/material';
import ButtonPrimary from '../components/shared/ButtonPrimary';

export default function SuscribeResult() {
  const searchParams = useSearchParams();
  const success = searchParams ? searchParams.get('success') : null;
  const prevUrl = searchParams ? searchParams.get('prevurl') : null;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Paper className="p-10">
        {success === 'true' ? (
          <div className="flex flex-col items-center justify-center container max-w-lg m-auto">
            <Image
              src="/happy-cloud.svg"
              alt="Happy Cloud"
              width={200}
              height={200}
              className="my-10"
            />
            <h1 className="font-bold text-2xl mb-3">
              Thank you for subscribing!
            </h1>
            <p className="mb-3">
              You have successfully subscribed to our premium service. You can
              now chat with our AI mechanic. Update your car maintenance
              preferences in your dashboard settings.
            </p>
            <ButtonPrimary href={`${prevUrl}`}>
              Return to Dashboard
            </ButtonPrimary>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center container max-w-lg m-auto text-center">
            <Image
              src="/sad-cloud.svg"
              alt="Sad Cloud"
              width={200}
              height={200}
              className="my-5"
            />
            <h1 className="font-bold text-2xl mb-3">
              Oops! An error occured in checkout
            </h1>
            <p className="mb-3">
              Please try again later or contact us at{' '}
              <a
                className="hover:underline"
                href="mailto:salesteam@magpollo.com"
              >
                salesteam@magpollo.com
              </a>
            </p>
            <ButtonPrimary
              className="w-48"
              href={`${prevUrl}`}
            >
              Return to Dashboard
            </ButtonPrimary>
          </div>
        )}
      </Paper>
    </div>
  );
}
