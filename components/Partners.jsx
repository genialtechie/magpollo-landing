import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  Abel,
  GoMoney,
  Heroshe,
  Loudr,
  Nebula,
  Refinable,
  Solarsoft,
  Sp,
  Zoone,
} from '../components';

const Partners = () => {
  return (
    <div className="bg-black">
      <Marquee
        speed={150}
        gradient={false}
      >
        <div className="flex w-full justify-between items-center h-40">
          <span className="inline-block px-6">
            <Abel />
          </span>
          <span className="inline-block px-6">
            <GoMoney />
          </span>
          <span className="inline-block px-6">
            <Heroshe />
          </span>
          <span className="inline-block px-6">
            <Loudr />
          </span>
          <span className="inline-block px-6">
            <Nebula />
          </span>
          <span className="inline-block px-6">
            <Solarsoft />
          </span>
          <span className="inline-block px-6">
            <Sp />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
