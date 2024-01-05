'use client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import React, { useEffect, useState, FC } from 'react';
import { useAtlasUser } from '@/context/UserContext';
import { Paper, Skeleton, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Suspense } from 'react';
import CarInfo from '../components/dashboard/CarInfo';
import QuickCheck from '../components/dashboard/QuickCheck';
import { useError } from '@/context/ErrorContext';
import TryPremium from '../components/dashboard/TryPremium';
import ChatNow from '../components/dashboard/ChatNow';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="standard"
      {...props}
    />
  );
});

// Explicitly typed Dashboard component
const Dashboard: FC = () => {
  const { user } = useAtlasUser(); //user context
  const [openCarModal, setOpenCarModal] = useState(false);
  const { error, setError, handleCloseError } = useError();

  return (
    <div>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={handleCloseError}
          severity="warning"
          sx={{ backgroundColor: '#ef4444' }}
        >
          An API error occured. Please try again.
        </Alert>
      </Snackbar>
      {user?.name ? (
        <h1 className="text-xl text-left mb-10">
          Welcome, <b className="text-secondary-dark">{user?.name}</b>!
        </h1>
      ) : (
        <Skeleton
          variant="text"
          width="30%"
          height="20"
          className="mb-10"
        />
      )}
      <CarInfo
        openCarModal={openCarModal}
        setOpenCarModal={setOpenCarModal}
      />
      <div className="my-10 w-fit mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 auto-rows-auto">
        <QuickCheck />
        {user?.isSuscribed === false && <TryPremium />}
        {user?.isSuscribed === true && <ChatNow />}
      </div>
    </div>
  );
};

// Export statement
export default withPageAuthRequired(Dashboard);
