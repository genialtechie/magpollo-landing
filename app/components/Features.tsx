import { Card, Paper, TextField, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';

function AnimatedChatBoxUser({ children }: { children: string }): JSX.Element {
  const userChatRef = useRef(null)
  const isInView = useInView(userChatRef, {
    once: true,
  });
  const userChatControls = useAnimation();

  useEffect(() => {
    if(isInView){
      userChatControls.start({ opacity: 1, x: 0, y: 40 })
    }
  }, [isInView]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 100 }}
      animate={userChatControls}
      transition={{
        duration: 0.8,
        delay: 0.5,
        type: 'spring',
        bounce: 0.25,
        repeat: 0,
      }}
      ref={userChatRef}
    >
      <div className="p-2 w-80 h-fit bg-secondary-dark/20 absolute -right-12 rounded-l-xl rounded-tr-xl rounded-br-none">
        <p className="text-black/60 text-sm md:text-lg cursor-default">
          {children}
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedChatBoxBot({ children }: { children: string }): JSX.Element {
  const botChatRef = useRef(null);
  const isInView = useInView(botChatRef, {
    once: true
  });
  const botChatControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      botChatControls.start({ opacity: 1, x: 0, y: 120 })
    }
  }, [isInView])

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 400 }}
      animate={botChatControls}
      transition={{
        duration: 0.8,
        delay: 1.0,
        type: 'spring',
        bounce: 0.25,
        repeat: 0,
      }}
      ref={botChatRef}
    >
      <div className="p-2 w-80 h-fit bg-white/50 absolute -left-12 rounded-r-xl rounded-tl-xl rounded-bl-none">
        <p className="text-black/60 text-sm md:text-lg cursor-default">
          {children}
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedNotif({ children }: { children: JSX.Element }): JSX.Element {
  const notifRef = useRef(null);
  const isInView = useInView(notifRef, {
    once: true
  });
  const notifControls = useAnimation();

  useEffect(() => {
    if(isInView){
      notifControls.start({ opacity: 1, y: 0 })
    }
  }, [isInView]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={notifControls}
      transition={{
        duration: 0.8,
        delay: 0.5,
        type: 'spring',
        bounce: 0.3,
        repeat: 0,
      }}
      ref={notifRef}
    >
      {children}
    </motion.div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section
      id="features"
      className="bg-off-white w-full h-fit p-10"
    >
      <h1 className="text-4xl text-black md:text-6xl text-center font-extrabold mb-16 mt-5 font-serif tracking-wide">
        Why MotorMentor?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 md:mb-32">
        <div className="my-5 md:order-last">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Paper className="h-80 w-72 md:h-96 md:w-80 bg-white mx-auto relative pb-3">
              <AnimatedChatBoxUser>
                My car wont start, what could be the problem?
              </AnimatedChatBoxUser>
              <AnimatedChatBoxBot>
                There are many reasons why a car won't start. Some of the most
                common reasons are problems with the battery, starter, or
                alternator. If you hear a clicking noise when you turn the key,
                it could be a problem..
              </AnimatedChatBoxBot>
              <div className="h-fit w-5/6 inset-x-0 mx-auto absolute bottom-0">
                <TextField
                  disabled
                  id="outlined-basic"
                  label="Type here..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon className="origin-center -rotate-45" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  className="mb-3 w-full"
                />
              </div>
            </Paper>
          </motion.div>
        </div>
        <div className="mb-10 flex flex-col md:justify-center md:order-1">
          <h1 className="text-4xl text-black font-semibold mt-10 mb-5">Chat</h1>
          <p className="text-black/60 md:text-lg">
            Experience automotive enlightenment with our AI Chat feature! Our
            tireless chatbot is your automotive companion, providing instant
            expert advice and personalized recommendations. Say hello to
            hassle-free solutions. Your road to automotive excellence starts
            here with MotorMentor - the future of automotive guidance!
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
      >
        <div className="p-8 bg-primary/40 text-white rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 cursor-default">
          <div>
            <AnimatedNotif>
              <div className="rounded-lg bg-white text-black p-3 flex flex-row items-center mb-3 max-w-sm">
                <span className="inline-block mr-4">
                  <BuildCircleIcon className="text-black/60 text-5xl" />
                </span>
                <span className="inline-block text-lg">
                  Maintenance Reminder: Check Your Oil!
                </span>
              </div>
            </AnimatedNotif>

            <AnimatedNotif>
              <div className="rounded-lg bg-white text-black p-3 flex flex-row items-center mb-3 max-w-sm">
                <span className="inline-block mr-4">
                  <ReportProblemIcon className="text-amber-400 text-5xl" />
                </span>
                <span className="inline-block text-lg">
                  Stay Safe: Tire Pressure Low!
                </span>
              </div>
            </AnimatedNotif>

            <AnimatedNotif>
              <div className="rounded-lg bg-white text-black p-3 flex flex-row items-center mb-3 max-w-sm">
                <span className="inline-block mr-4">
                  <SyncProblemIcon className="text-primary text-5xl" />
                </span>
                <span className="inline-block text-lg">
                  Urgent: Recall Alert for Your Vehicle!
                </span>
              </div>
            </AnimatedNotif>
          </div>
          <div className="pb-14 flex flex-col md:justify-center">
            <h1 className="text-4xl font-semibold mt-10 mb-5">
              Maintenance Updates
            </h1>
            <p className="md:text-lg">
              Stay Ahead of Car Troubles with our Maintenance Update Feature!
              Get timely reminders and expert advice for a smoother, worry-free
              ride. Explore the future of auto care with MotorMentor today!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
