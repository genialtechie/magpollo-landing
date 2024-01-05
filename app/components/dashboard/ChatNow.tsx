import { Paper } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

export default function ChatNow(): JSX.Element {
  return (
    <Paper
      className="max-w-md w-full bg-[url('/abstract-bg.jpg')] text-white"
      elevation={3}
    >
      <div className="text-white backdrop-blur-sm p-5 h-full w-full flex flex-col justify-center">
        {/* <h1 className="text-3xl font-bold font-serif mb-3">Chat Now </h1> */}
        <p className="text-white text-sm mb-5">
          Unlock the full potential of your subscription! Explore our AI Chatbot
          for swift, precise car problem diagnosis. Shift to smarter,
          hassle-free maintenance. Give it a try today!
        </p>
        <Link
          href="chat"
          className="text-white cursor-pointer w-fit py-2 px-4 font-semibold text-lg hover:bg-white hover:text-primary rounded-lg transition-all duration-300 ease-in-out"
        >
          Chat Now{' '}
          <LaunchIcon
            fontSize="medium"
            className="inline-block ml-2"
          />
        </Link>
      </div>
    </Paper>
  );
}
