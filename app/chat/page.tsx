'use client';

import { useAtlasUser } from '@/context/UserContext';
import { useError } from '@/context/ErrorContext';
import { useEffect, useState, useRef } from 'react';
import { redirect } from 'next/navigation';
import { Menu, Settings, Logout, Send } from '@mui/icons-material';
import Sidebar from '../components/dashboard/Sidebar';
import Link from 'next/link';
import { InputBase, IconButton, Paper } from '@mui/material';
import { useChat } from 'ai/react';

// save chat to db
function saveChat() {
  // TODO
}

export default function Chat(): JSX.Element {
  const { user } = useAtlasUser();
  const { setError } = useError();
  const [open, setOpen] = useState(false); // sidebar
  // chat state
  const {
    messages,
    input,
    isLoading,
    stop,
    handleInputChange,
    setInput,
    handleSubmit,
  } = useChat({
    onError: (err) => {
      console.error(err);
      setError(true);
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  // wait for user to load
  useEffect(() => {
    // wait for user to load
    if (!user) return;
    if (user.isSuscribed === false) {
      redirect('/dashboard');
    }
  }, [user]);

  return (
    <>
      <nav className="p-6 w-full h-fit flex flex-row justify-between">
        <Menu
          className="scale-125 cursor-pointer rounded-full ring-gray-400 ring-offset-4 ring-1 transition-colors duration-300 delay-75 hover:text-primary"
          onClick={() => setOpen(!open)}
        />
        <div className="w-fit">
          <Link href="/dashboard/settings">
            <Settings className="mr-6 scale-125 cursor-pointer rounded-full ring-gray-400 ring-offset-4 ring-1 transition-colors duration-300 delay-75 hover:text-primary" />
          </Link>
          <a href="/api/auth/logout">
            <Logout className="scale-125 cursor-pointer rounded-full ring-gray-400 ring-offset-4 ring-1 transition-colors duration-300 delay-75 hover:text-primary" />
          </a>
        </div>
        <Sidebar
          openSidebar={open}
          setOpenSidebar={setOpen}
          navItems={[
            { name: 'Overview', href: '/dashboard' },
            { name: 'AI Chat', href: '/chat' },
            { name: 'Maintenance', href: '/dashboard/maint' },
          ]}
        />
      </nav>
      <div className="flex-1 flex flex-col h-full w-full">
        <div className="flex-1 flex flex-col h-full w-full bg-off-white p-5 mb-10 md:p-10">
          {messages.length > 0 ? (
            <div className="h-full w-full">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 m-3 mb-5 max-w-md md:max-w-2xl ${
                    msg.role == 'user'
                      ? 'float-right clear-left'
                      : 'float-left clear-right'
                  }`}
                >
                  <div
                    className={`text-gray-400 text-xs mb-2 ${
                      msg.role == 'user' ? 'float-right mr-3' : 'ml-3'
                    }`}
                  >
                    {msg.role == 'user' ? 'You' : 'MotorMentor'}
                  </div>
                  <div
                    className={` clear-both rounded-xl ring-1 ring-offset-2 ring-gray-400 ring-opacity-50 p-4 ${
                      msg.role == 'user'
                        ? 'bg-primary text-white rounded-br-none '
                        : 'rounded-bl-none text-black bg-transparent'
                    }}`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full w-full flex-1 flex flex-col items-center justify-end">
              <h3 className="rounded-md ring-2 ring-offset-2 ring-gray-400 ring-opacity-50 p-4">
                My car won't start, what could be the problem?
                <IconButton
                  className="ml-4"
                  aria-label="send"
                  onClick={() => {
                    inputRef.current?.focus();
                    setInput("My car won't start, what could be the problem?");
                  }}
                >
                  <Send />
                </IconButton>
              </h3>
            </div>
          )}
        </div>
        <div className="fixed bottom-0 h-fit w-full bg-white">
          <Paper
            component="form"
            className="w-full h-16 flex flex-row items-center"
            onSubmit={handleSubmit}
          >
            <InputBase
              className="flex-grow px-4"
              placeholder="Type here..."
              inputProps={{ 'aria-label': 'type here', ref: inputRef }}
              value={input}
              onChange={handleInputChange}
            />
            <IconButton
              type="submit"
              className="mr-4"
              aria-label="send"
              disabled={isLoading}
            >
              <Send />
            </IconButton>
          </Paper>
        </div>
      </div>
    </>
  );
}
