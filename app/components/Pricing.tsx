import { Card } from '@mui/material';
import ButtonPrimary from './shared/ButtonPrimary';
import CheckIcon from '@mui/icons-material/Check';

export default function Pricing(): JSX.Element {
  return (
    <section
      className="w-full h-fit bg-white p-10"
      id="pricing"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-5xl text-black font-semibold font-serif mt-5 mb-20">
          Simple pricing for all your needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            elevation={3}
            className="p-5 border-primary border rounded-2xl"
          >
            <h3 className="text-3xl font-bold font-serif mb-5">Free</h3>
            <ButtonPrimary
              className="block mx-auto text-center py-3 rounded-xl font-bold "
              href="/api/auth/login"
            >
              Get Started Free
            </ButtonPrimary>
            <p className="my-2 text-slate-500 text-center text-lg">
              Try it out!
            </p>
            <ul className="text-left text-sm mt-5 pl-3">
              <li>
                <CheckIcon className="mr-2" />
                Check your vehicle's safety status
              </li>
              <li>
                <CheckIcon className="mr-2" />
                Get a list of recommended repairs
              </li>
              <li>
                <CheckIcon className="mr-2" />
                Check for active recalls
              </li>
            </ul>
          </Card>
          <Card
            elevation={3}
            className="p-5 border-primary border rounded-2xl"
          >
            <h3 className="text-3xl font-bold font-serif mb-5">$14.99/month</h3>
            <ButtonPrimary
              className="block mx-auto text-center py-3 rounded-xl font-bold "
              href="/api/auth/login"
            >
              Get Started
            </ButtonPrimary>
            <p className="my-2 text-slate-500 text-center text-lg">
              Everything you need to get started
            </p>
            <ul className="text-left text-sm mt-5 pl-3">
              <li>
                <CheckIcon className="mr-2" />
                Check your vehicle's safety status
              </li>
              <li>
                <CheckIcon className="mr-2" />
                Get a list of recommended repairs
              </li>
              <li>
                <CheckIcon className="mr-2" />
                Check for active recalls
              </li>
              <li>
                <CheckIcon className="mr-2" />
                Keep track of multiple vehicles
              </li>
              <li>
                <CheckIcon className="mr-2" />
                Chat with our AI mechanic
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
