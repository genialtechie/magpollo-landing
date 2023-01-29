import React from 'react';
import Marquee from "react-fast-marquee";
import {Abel, GoMoney, Heroshe, Loudr, Nebula, Refinable, Solarsoft, Sp, Zoone } from "../components" 

const Partners = () => {
  return <div className='bg-black'>
    <Marquee speed={150} gradient={false} >
      <div className="flex w-full justify-around items-center h-40 px-300" >
        <Abel/>
        <GoMoney/>
        <Heroshe/>
        <Loudr/>
        <Nebula/>
        <Solarsoft/>
        <Sp/>
      </div>
  </Marquee>
  </div>;
};

export default Partners;
