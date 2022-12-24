import Link from 'next/link';
import Image from 'next/image';
import { ProductWidget } from '../components';
import { getFeaturedProducts } from '../prisma/queries';
import { Newsletter } from '../components';

export default function Home({ products }) {
  return (
    <div>
      <div className="lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row lg:items-center p-5 lg:p-14 mb-10">
        <div className="flex flex-col lg:w-2/3">
          <h1 className="text-5xl font-bold text-custom mb-5 font-serif tracking-wide">
            Celebrate the flavors of Africa with every bite
          </h1>
          <p className="text-lg text-custom mb-5 font-sans">
            Bringing the tradition and culture to your table
          </p>
          <Link href="/products?category=all">
            <button className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-fit font-bold py-3 px-16 lg:px-20 mx-auto lg:mx-0 rounded-sm uppercase font-serif">
              View Menu
            </button>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 lg:w-1/3">
          <Image
            src="/hero.svg"
            alt="hero"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
      <h2 className="text-orange text-2xl text-center font-bold mb-5">
        Discover something new with every bite
      </h2>
      <p className="text-lg text-center font-semibold text-custom/50 mb-5 font-sans">
        African food for your soul!
      </p>
      <ProductWidget products={products} />
      <h3 className="text-xl text-orange transition duration-300 ease-in-out hover:text-custom font-bold w-fit mx-auto mt-5 mb-16 underline uppercase">
        <Link href="/products?category=all">Show More</Link>
      </h3>
      <div className="h-screen lg:h-[600px] container flex flex-col lg:flex-row">
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full bg-[#febd00] p-10 lg:p-20">
          <h2 className="text-4xl lg:text-5xl text-custom font-bold mb-5">
            It tastes just like home
          </h2>
          <p className="text-lg text-custom mb-5 font-sans">
            We bring the tradition and culture to your table and eventually your
            taste buds
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
          className="w-full h-1/2 lg:w-1/2 lg:h-full object-cover"
        />
      </div>
      <div className="container h-[250px] relative">
        <Image
          src="/footer-pattern.png"
          alt="footer pattern"
          width={500}
          height={500}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative w-full z-50 flex flex-col justify-around p-5 lg:p-10 lg:px-28">
          <h2 className="text-4xl lg:text-5xl text-custom font-bold mb-5">
            Suscribe to our newsletter
          </h2>
          <Newsletter />
        </div>
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
