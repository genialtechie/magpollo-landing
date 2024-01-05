import { CircularProgress, Avatar } from '@mui/material';
import { WarningAmber, Done } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export default function ProgressSpinner({
  result,
}: {
  result: 'failure' | 'success';
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //load for 1s when component is mounted
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    //clear timeout when component is unmounted
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative h-10 w-10 scale-75 inline-block z-0">
      {loading && <CircularProgress className="absolute block" />}
      {!loading && result === 'success' && (
        <Avatar className="bg-green-500">
          <Done className="text-white" />
        </Avatar>
      )}
      {!loading && result === 'failure' && (
        <Avatar className="bg-orange-600">
          <WarningAmber className="text-white" />
        </Avatar>
      )}
    </div>
  );
}
