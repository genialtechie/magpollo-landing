import React from 'react';
import Marquee from "react-fast-marquee";
import {Abel, GoMoney, Heroshe, Loudr, Nebula, Refinable, Solarsoft, Sp, Zoone } from "../components" 

const Partners = () => {
  return <div>
    <Marquee speed={200} gradient={false}>
      <div className="flex w-full justify-between items-center h-40 bg-black" >
        <Refinable/>
        <Abel/>
        <GoMoney/>
        <Heroshe/>
        <Loudr/>
        <Nebula/>
        <Solarsoft/>
        <Sp/>
        <Zoone/>
      </div>
  </Marquee>
  </div>;
};

export default Partners;
