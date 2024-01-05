import { Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { useAtlasUser } from '@/context/UserContext';
import { usePathname } from 'next/navigation';

export default function TryPremium(): JSX.Element {
  const { user } = useAtlasUser();
  const pathname = usePathname();
  return (
    <Paper
      className="max-w-md w-full bg-[url('/abstract-bg.jpg')] text-white"
      elevation={3}
    >
      <div className="text-white backdrop-blur-sm p-5 h-full w-full flex flex-col justify-center">
        <h1 className="text-3xl font-bold font-serif mb-3">Try Premium </h1>
        <p className="text-white text-sm mb-5">
          Supercharge your car maintenance with premium access and chat with our
          AI mechanic!
        </p>
        <a
          onClick={() => {
            fetch('/api/checkout-session', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                priceId: 'price_1NUaYhBiFHS9806cVvGf4vc0',
                stripeId: user?.stripeId,
                url: pathname,
              }),
            }).then((res) => {
              if (res.ok) {
                res.json().then((data) => {
                  window.location.href = data.url;
                });
              }
            });
          }}
          className="text-white cursor-pointer w-fit py-2 px-4 font-semibold text-lg hover:bg-white hover:text-primary rounded-lg transition-all duration-300 ease-in-out"
        >
          Chat Now{' '}
          <LaunchIcon
            fontSize="medium"
            className="inline-block ml-2"
          />
        </a>
      </div>
    </Paper>
  );
}
