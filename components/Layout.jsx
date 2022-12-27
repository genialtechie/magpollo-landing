import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { Unbounded } from '@next/font/google';
import Cart from './Cart';

const unbounded = Unbounded({
  weight: '400',
  variable: '--font-unb',
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>The African Soul Food Restaurant</title>
        <meta
          name="description"
          content="Celebrate the flavors of Africa with every bite of our delicious meals."
        />
        <meta
          name="keywords"
          content="African, Soul, Food, Restaurant, African Food, Soul Food, African Restaurant, Soul Food Restaurant, African Cuisine"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />
      <main
        className={`${unbounded.variable} font-serif overflow-hidden bg-theme`}
      >
        {children}
        <Cart />
      </main>
      <Footer className={`${unbounded.variable} font-serif`} />
    </>
  );
};

export default Layout;
