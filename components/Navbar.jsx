import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';
import dynamic from 'next/dynamic';
import { MobileNav } from '../components';
import { useCart } from '../utils/CartContext';

const ShoppingCart = dynamic(() => import('./svgs/ShoppingCart'), {
  ssr: false,
});

const Navbar = () => {
  const { hours, setCartOpen } = useCart();
  return (
    <nav>
      <div className="w-full bg-orange text-md text-theme font-bold text-center">
        {hours === 'Closing Soon' ? hours + '!' : null}
      </div>
      <div className="bg-theme text-lg flex flex-row justify-between items-center py-5 px-10 relative">
        <span className="h-fit">
          <ul className="hidden lg:flex lg:flex-row uppercase text-lg font-semibold">
            <li className="mr-8 hover:text-orange">
              <Link href="/products?category=all">Menu</Link>
            </li>
            <li className="mr-8 hover:text-orange">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-orange">
              <Link href="/reservation">Reservations</Link>
            </li>
          </ul>
          <MobileNav />
        </span>
        <span className="absolute mx-auto inset-x-0 inset-y-0 my-auto w-fit h-fit">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={30}
              height={30}
              className="cursor-pointer scale-125"
            />
          </Link>
        </span>
        <span className="h-fit">
          <ShoppingCart
            className="scale-75 hover:fill-orange cursor-pointer transition duration-300 ease-in-out"
            onClick={() => setCartOpen(true)}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
