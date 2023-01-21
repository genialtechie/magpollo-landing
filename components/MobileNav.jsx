import Link from 'next/link';
import { Close, Menu } from '../components';
import React, { useState, useEffect } from 'react';

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    openNav
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  });

  return (
    <>
      {openNav ? (
        <div className="lg:hidden h-screen w-screen z-50 fixed inset-x-0 inset-y-0 overflow-y-scroll bg-cream text-black p-5">
          <Close
            className="text-orange mx-auto scale-110 mt-5 cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          />
          <div className="h-fit mt-24">
            <ul className="text-3xl font-bold tracking-wider mb-16 text-center">
              <li
                onClick={() => setOpenNav(!openNav)}
                className="mb-7 transition duration-200 ease-linear hover:text-red hover:scale-105"
              >
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <hr className="w-4/5 bg-orange mx-auto mb-16" />
          <div className="mb-10 text-center text-xl tracking-wide">
            <p className="mb-4">
              <a href="tel:+17707950707">(470)-549-2477</a>
            </p>
            <p className="mb-10">Atlanta, GA </p>
          </div>
        </div>
      ) : (
        <Menu
          onClick={() => setOpenNav(!openNav)}
          className="lg:hidden scale-100 hover:fill-red cursor-pointer transition duration-300 ease-in-out"
        />
      )}
    </>
  );
};

export default MobileNav;
