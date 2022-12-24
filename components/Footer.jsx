import Image from 'next/image';
import { Twitter, Instagram } from '../components';
import { useCart } from '../utils/CartContext';

const Footer = () => {
  const { hours } = useCart();
  return (
    <footer className="w-full py-10 lg:p-24 h-fit bg-black flex flex-col lg:flex-row justify-between">
      <div className="w-fit mx-auto lg:mx-0 mb-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="cursor-pointer scale-125 mb-7 mx-auto lg:mx-0"
        />
        <div className="flex flex-row">
          <Twitter className="lg:scale-150 fill-theme hover:fill-orange cursor-pointer transition duration-300 ease-in-out mr-4 lg:mr-7" />
          <Instagram className="lg:scale-150 fill-theme hover:fill-orange cursor-pointer transition duration-300 ease-in-out" />
        </div>
      </div>
      <div className="grid grid-cols-1 auto-cols-max lg:grid-rows-2 lg:grid-cols-2 gap-6">
        <div className="text-center lg:text-left">
          <div className="px-5 py-2 font-semibold mx-auto lg:mx-0 w-fit bg-theme text-custom mb-3">
            {hours}
          </div>
          <p className="mb-2 btn text-theme">Mon-Fri: 8am-8pm</p>
          <p className="mb-2 btn text-theme">Sat: 9am-7pm</p>
          <p className="mb-2 btn text-theme">Sun: 9am-8pm</p>
        </div>
        <div className="text-center lg:text-left">
          <div className="px-5 py-2 font-semibold mx-auto lg:mx-0 w-fit bg-theme text-custom mb-3">
            Address
          </div>
          <p className="mb-2 btn text-theme">
            585 Franklin Gateway, Marietta, GA 30067
          </p>
        </div>
        <div className="text-center lg:text-left">
          <div className="px-5 py-2 font-semibold mx-auto lg:mx-0 w-fit bg-theme text-custom mb-3">
            Contact
          </div>
          <p className="mb-2 btn text-theme">
            P : <a href="tel:+17707950707">(770)-795-0707</a>
          </p>
          <p className="mb-2 btn text-theme">
            E :{' '}
            <a href="mailto:contact@theafricansoulfood.com">
              contact@theafricansoulfood.com
            </a>
          </p>
        </div>
        <div className="text-center lg:text-left">
          <div className="px-5 py-2 font-semibold mx-auto lg:mx-0 w-fit bg-theme text-custom mb-3">
            Dining
          </div>
          <p className="mb-2 btn text-theme">
            Both walk-ins and reservations are accepted
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
