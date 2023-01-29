import React from 'react';
import { Notepad, Pendraw, Growth } from '../components';
import LottieAnimation from '../components/ui/LottieAnimation';

const HowItWorks = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="py-20 lg:px-20 px-5">
        <div className="grid grid-cols-3 auto-cols-min gap-2 w-fit h-fit mx-auto mb-8">
          <h1 className="text-5xl uppercase leading-tight col-span-2">
            Elevate
          </h1>
          <h1 className="text-xl uppercase text-red">
            Design, <br /> Success
          </h1>
        </div>
        <p className="mb-10 font-sans lg:w-1/3 text-center lg:mx-auto">
          With our cutting-edge designs, you&apos;ll be sure to elevate your
          online presence and dominate your competition.
        </p>
        <div className="w-fit mx-auto grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-8 lg:gap-28 auto-cols-min mb-28">
          <div className="flex flex-col items-center w-80">
          <LottieAnimation animationData={Notepad} size={126} />
            <p className="font-sans text-center">
              With our cutting-edge designs, you&apos;ll be sure to elevate your
              online presence and dominate your competition.
            </p>
          </div>
          <div className="flex flex-col items-center w-80">
          <LottieAnimation animationData={Pendraw} size={126} />
            <p className="font-sans text-center">
              With our cutting-edge designs, you&apos;ll be sure to elevate your
              online presence and dominate your competition.
            </p>
          </div>
          <div className="flex flex-col items-center w-80">
          <LottieAnimation animationData={Growth} size={126} />
            <p className="font-sans text-center">
              With our cutting-edge designs, you&apos;ll be sure to elevate your
              online presence and dominate your competition.
            </p>
          </div>
        </div>
        <div className="relative w-fit h-fit group mx-auto">
          <svg
            width="1337"
            height="286"
            viewBox="0 0 1337 286"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-red hidden lg:block scale-x-90"
          >
            <path
              d="M67.4713 273.5C76.106 280.93 92.8232 284.645 117.623 284.645H127.247L1207.85 285.998L1217.18 286C1241.98 286 1258.7 282.285 1267.34 274.855C1275.77 267.425 1279.99 252.616 1279.99 230.427V194.432C1279.99 186.6 1281.04 180.174 1283.15 175.154C1285.26 170.134 1288.42 166.068 1292.64 162.955C1300.37 157.132 1311.61 154.22 1326.37 154.22H1331.55C1334.02 154.22 1336.01 152.224 1336.01 149.761V137.142C1336.01 134.68 1334.02 132.684 1331.55 132.684H1326.37C1319.45 132.684 1313.07 131.981 1307.25 130.575C1301.52 129.169 1296.65 127.011 1292.64 124.099C1288.42 121.087 1285.26 117.121 1283.15 112.201C1281.04 107.181 1279.99 100.755 1279.99 92.9236V56.7783C1279.99 34.4887 1275.77 19.6791 1267.34 12.3497C1259.1 5.02019 1242.39 1.35545 1217.18 1.35545H1207.86C1207.85 1.35545 1207.85 1.35928 1207.85 1.36401C1207.85 1.36874 1207.84 1.37257 1207.84 1.37257L127.262 0.00200508L117.623 0C92.4216 0 75.7044 3.66474 67.4713 10.9942C58.937 18.3237 54.6698 33.1332 54.6698 55.4229V91.5682C54.6698 106.428 52.0091 116.82 46.6877 122.744C41.3663 128.467 31.6272 131.328 17.4702 131.328H4.45879C1.99627 131.328 0 133.324 0 135.787V148.406C0 150.868 1.99627 152.865 4.45879 152.865H17.4702C31.5268 152.865 41.2659 155.776 46.6877 161.6C52.0091 167.524 54.6698 178.016 54.6698 193.076V229.071C54.6698 251.361 58.937 266.17 67.4713 273.5Z"
              fill="#CE4257"
            />
          </svg>
          <div className="lg:absolute m-auto inset-0 lg:w-2/3 w-fit p-10 h-fit font-sans font-bold tracking-wide rounded-md bg-red lg:bg-transparent text-white text-2xl text-center before:content-quote before:block before:mb-7">
            I love every project I work on to be organised and the guys at
            Magpollo get it right.
            <br />
            <div className="text-white/70 font-sans tracking-normal font-normal mt-7">
              - Tameika Staton
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
