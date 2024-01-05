import { useAtlasUser } from '@/context/UserContext';
import { Card, Skeleton, Typography } from '@mui/material';
import Image from 'next/image';
import StartForm from '@/app/components/dashboard/StartForm';

export default function CarInfo({
  openCarModal,
  setOpenCarModal,
}: {
  openCarModal: boolean;
  setOpenCarModal: (open: boolean) => void;
}): JSX.Element {
  const { user } = useAtlasUser();
  return (
    <>
      <Card className="max-w-3xl w-full h-fit mx-auto rounded-xl">
        {user?.cars && user?.cars?.length > 0 ? (
          <div className="flex flex-row">
            <Image
              src="/dash-car-mech.svg"
              alt="Car"
              width={300}
              height={300}
              className="bg-[#fdeeb5] w-[150px] md:w-[300px] object-contain flex-auto"
            />
            <div className="p-5 w-full h-full">
              <div>
                <h1 className="text-sm uppercase font-semibold font-serif mb-4">
                  {user?.cars ? 'Your Vehicle' : 'Add a Vehicle'}
                </h1>
                <p className="text-black/60 md:text-xl mb-1">
                  {user?.cars[0].year} {user?.cars[0].make}{' '}
                  {user?.cars[0].model}
                </p>
                {user?.cars[0]?.engine && (
                  <p className="text-black/60 text-sm md:text-base mb-1">
                    Engine: {user?.cars[0].engine}{' '}
                  </p>
                )}
                {user?.cars[0]?.transmission && (
                  <p className="text-black/60 text-xs whitespace-nowrap md:text-base mb-1">
                    Transmission: {user?.cars[0].transmission}{' '}
                  </p>
                )}
              </div>
              <button
                className="relative bottom-0 text-sm text-secondary-dark font-semibold hover:underline float-right mr-2 uppercase"
                onClick={() => setOpenCarModal(true)}
              >
                Update
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-row p-5">
            <Skeleton
              variant="rectangular"
              width={200}
              height={120}
            />
            <div className="p-5 w-full h-full flex flex-col justify-between items-center">
              <Skeleton
                variant="text"
                width={'80%'}
                height={20}
              />
              <Skeleton
                variant="text"
                width={'80%'}
                height={20}
              />
              <Skeleton
                variant="text"
                width={'80%'}
                height={20}
              />
              <Skeleton
                variant="text"
                width={'80%'}
                height={20}
              />
            </div>
          </div>
        )}
      </Card>
      <StartForm
        openModal={openCarModal}
        setOpenModal={setOpenCarModal}
      />
    </>
  );
}
