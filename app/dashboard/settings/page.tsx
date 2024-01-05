'use client';

import { Switch } from '@mui/material';
import { useAtlasUser } from '@/context/UserContext';

export default function Settings(): JSX.Element {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const { user } = useAtlasUser();
  return (
    <section>
      <h1 className="text-3xl font-semibold text-gray-900 mb-10">Settings</h1>
      <div>
        <div className="rounded-lg border border-gray-300 p-6 mb-5">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Maintenance
          </h3>
          <div className="p-3 flex flex-row items-center contrast-50">
            <p className="text-lg mr-2">
              Get maintenance updates directly to your email. <br />
              <span className="text-sm text-gray-500">
                We will send you reminders for routine vehicle maintenance.
              </span>
            </p>
            <Switch
              {...label}
              disabled
            />
          </div>
          <div className="p-3 flex flex-row items-center contrast-50">
            <p className="text-lg mr-2">
              Get recall alerts. <br />
              <span className="text-sm text-gray-500">
                We will send you an email if your vehicle has a recall.
              </span>
            </p>
            <Switch
              {...label}
              disabled
            />
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-6">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Subscription
          </h3>
          {user && user?.isSuscribed ? (
            <div className="p-3 flex flex-col">
              <p className="text-lg mb-2 ">
                Manage your subscription. <br />
                <span className="text-sm text-gray-500">
                  Update your billing information and manage your subscription.
                </span>
              </p>
              <button
                className="px-4 py-2 h-fit w-fit bg-primary border-white border-2 text-white rounded-lg hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out"
                onClick={async () => {
                  const url = await fetch('/api/customer-portal', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      stripeId: user?.stripeId,
                    }),
                  });
                  const { url: stripeUrl } = await url.json();
                  // push to stripe url
                  window.location.href = stripeUrl;
                }}
              >
                Manage
              </button>
            </div>
          ) : (
            <div className="p-3 flex flex-col">
              <p className="text-lg mb-2 ">
                Subscribe to premium. <br />
                <span className="text-sm text-gray-500">
                  Get access to our AI mechanic and more!
                </span>
              </p>
              <button
                className="px-4 py-2 h-fit w-fit bg-primary border-white border-2 text-white rounded-lg hover:bg-white hover:text-primary hover:border-primary transition-all duration-300 ease-in-out"
                onClick={async () => {
                  const url = await fetch('/api/checkout-session', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      priceId: 'price_1NUaYhBiFHS9806cVvGf4vc0',
                      stripeId: user?.stripeId,
                      url: '/dashboard/settings',
                    }),
                  });
                  const { url: stripeUrl } = await url.json();
                  // push to stripe url
                  window.location.href = stripeUrl;
                }}
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
