import React from 'react';
import { Lightbulb, Target, ButtonWhite } from '../components';
import LottieAnimation from '../components/ui/LottieAnimation';

const GetStarted = () => {
  return (
    <div className="bg-red py-16 px-10 items-center relative font-sans text-center text-white ">
      <h1 className="font-mono text-5xl mb-8 font-bold">LET&apos;S BUILD</h1>
      <p className="font-thin mb-8">
        Let’s work with you every step of the way to bring your project to life.
      </p>

      <div className="flex flex-row gap-5  place-content-center mt-6 mx-100 align-center whitespace-normal">
        <div className="bg-darkRed w-64 h-72 items-center flex flex-col justify-center">
          <LottieAnimation
            animationData={Lightbulb}
            size={126}
          />
          <p className="font-thin px-6 mt-6">
            {' '}
            Let us know you and your digital needs
          </p>
        </div>
        <div className="bg-darkRed w-64 h-72 items-center flex flex-col justify-center">
          <LottieAnimation
            animationData={Target}
            size={126}
          />
          <p className="font-thin px-6 mt-6">
            We&apos;ll work with you to reach your targets.
          </p>
        </div>
      </div>
      <ButtonWhite
        href="/lets-build"
        className="mx-auto mt-10"
      >
        GET STARTED
      </ButtonWhite>
    </div>
  );
};

export default GetStarted;
