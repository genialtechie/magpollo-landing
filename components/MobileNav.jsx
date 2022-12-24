import Link from 'next/link';
import { Close, Menu } from '../components';
import React, { useState, useEffect } from 'react';
import { useCart } from '../utils/CartContext';

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const { hours } = useCart();

  useEffect(() => {
    openNav
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  });

  return (
    <>
      {openNav ? (
        <div className="lg:hidden h-screen w-screen z-50 fixed inset-x-0 inset-y-0 overflow-y-scroll bg-theme p-5">
          <Close
            className="text-orange mx-auto scale-110 mt-5 cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          />
          <div className="h-fit mt-24">
            <ul className="text-3xl text-custom font-bold tracking-wider mb-16 text-center">
              <li className="mb-7 transition duration-200 ease-linear hover:text-orange hover:scale-105">
                <Link href="/products?category=all">Our Menu</Link>
              </li>
              <li className="mb-7 transition duration-200 ease-linear hover:text-orange hover:scale-105">
                <Link href="/reservation">Make a reservation</Link>
              </li>
              <li className="mb-7 transition duration-200 ease-linear hover:text-orange hover:scale-105">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <hr className="w-4/5 bg-orange mx-auto mb-16" />
          <div className="mb-20 text-center text-xl tracking-wide text-custom btn">
            <p className="mb-4">{hours}</p>
            <p className="mb-1">Mon-Fri: 8a-8p</p>
            <p className="mb-1">Sat: 9a-7p</p>
            <p className="mb-1">Sun: 9a-8p</p>
          </div>

          <div className="mb-10 text-center text-xl tracking-wide text-custom btn">
            <p className="mb-4">
              <a href="tel:+17707950707">(770)-795-0707</a>
            </p>
            <p className="mb-1">585 Franklin Gateway, Marietta, GA 30067</p>
          </div>
        </div>
      ) : (
        <Menu
          onClick={() => setOpenNav(!openNav)}
          className="lg:hidden scale-100 hover:fill-orange cursor-pointer transition duration-300 ease-in-out"
        />
      )}
    </>
  );
};

export default MobileNav;
