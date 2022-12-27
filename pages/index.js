import Link from 'next/link';
import Image from 'next/image';
import { ProductWidget } from '../components';
import { getFeaturedProducts } from '../prisma/queries';

export default function Home({ products }) {
  return (
    <div>
      <div className="lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row lg:justify-center p-5 lg:p-14 mb-10">
        <div className="flex flex-col">
          <h1 className="text-5xl lg:w-[700px] lg:text-6xl font-bold text-custom mb-5 font-serif tracking-wide">
            Celebrate the flavors of Africa with every bite
          </h1>
          <p className="text-lg text-custom mb-5 font-sans">
            Bringing the tradition and culture to your table
          </p>
          <Link href="/products?category=all">
            <button className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-fit font-bold py-3 px-20 mx-auto lg:mx-0 rounded-sm uppercase font-serif">
              View Menu
            </button>
          </Link>
        </div>
        <div className="hidden md:block mb-7 lg:mb-0">
          <Image
            src="/hero.svg"
            alt="hero"
            width={450}
            height={450}
            className="mx-auto scale-95"
          />
        </div>
      </div>
      <h2 className="text-orange text-2xl text-center font-bold mb-3">
        Discover something new with every bite
      </h2>
      <p className="text-lg text-center font-semibold text-custom/50 md:mb-3 font-sans">
        African food for your soul!
      </p>
      <ProductWidget products={products} />
      <h3 className="text-xl text-orange transition duration-300 ease-in-out hover:text-custom font-bold w-fit mx-auto mt-5 mb-16 underline uppercase">
        <Link href="/products?category=all">Show More</Link>
      </h3>
      <div className="h-screen lg:h-[600px] w-full flex flex-col lg:flex-row">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full bg-[#febd00] p-5 md:p-10 lg:p-20">
          <h2 className="text-4xl lg:text-5xl text-custom font-bold mb-5 font-serif">
            It tastes just like home
          </h2>
          <p className="text-lg text-custom mb-5 font-sans">
            We are proud to serve authentic and delicious African cuisine that
            will transport your taste buds straight to the vibrant and diverse
            cultures of the continent.
          </p>
          <button className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-fit font-bold py-3 px-16 lg:px-20 mx-auto lg:mx-0 rounded-sm uppercase font-serif">
            <Link href="/about">Our Story</Link>
          </button>
        </div>
        <Image
          src="/chef.png"
          alt="Chef Carol Gitonga"
          width={500}
          height={500}
          className="w-full h-1/2 lg:w-1/2 lg:h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getFeaturedProducts();
  return {
    props: {
      products,
    },
  };
}
