import React from 'react';
import { SmallCard } from '../components';
import restaurant from '../assets/img/restaurant.png';
import dooshima from '../assets/img/dooshima.png';
import nebula from '../assets/img/nebula.png';
import lego from '../assets/img/lego.png';

const RecentWork = () => {
  return (
    <div className="bg-lightBlue py-10 px-10 items-center relative font-mono text-center text-black ">
      <h1 className="font-mono text-5xl">RECENT WORK</h1>
      <p className="font-sans mt-4">
        The key to elevating your digital game and standing out
      </p>
      <div className="h-fit w-fit grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-28 content-around mx-auto">
        <SmallCard image={restaurant} />
        <SmallCard image={dooshima} />
        <SmallCard image={nebula} />
        <SmallCard image={lego} />
      </div>
    </div>
  );
};

export default RecentWork;
