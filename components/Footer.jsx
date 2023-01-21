import Image from 'next/image';
import { Twitter, Instagram } from '../components';

const Footer = ({ className }) => {
  return (
    <footer
      className={
        className +
        ' ' +
        `font-sans w-full py-10 lg:py-16 h-fit bg-black text-white flex flex-col lg:flex-row justify-around text-sm`
      }
    >
      <div className="w-fit mx-auto lg:mx-0 mb-10">
        <Image
          src="/logo-dark.png"
          alt="logo"
          width={150}
          height={50}
          className="cursor-pointer scale-125 mb-7 mx-auto lg:mx-0"
        />
        <div className="flex flex-row h-fit w-fit mb-7">
          <Twitter className="lg:scale-150 fill-white hover:fill-red cursor-pointer transition duration-300 ease-in-out mr-4 lg:mr-7" />
          <Instagram className="lg:scale-150 fill-white hover:fill-red cursor-pointer transition duration-300 ease-in-out" />
        </div>
        <p className="text-center lg:text-left">
          Magpollo is headquartered in Atlanta, GA, USA
        </p>
      </div>
      <div className="grid grid-cols-1 auto-cols-max lg:grid-rows-1 lg:grid-cols-3 gap-y-10 lg:gap-5">
        <div className="text-center lg:text-left">
          <div className="mx-auto lg:mx-0 w-fit text-gray-400 mb-3">
            Find Us
          </div>
          <ul className="mb-2">
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-red"
                href="http://instagram.com/magpollotech"
              >
                Instagram
              </a>
            </li>
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-red"
                href="http://twitter.com/magpollotech"
              >
                Twitter
              </a>
            </li>
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-red"
                href="http://linkedin.com/company/magpollo"
              >
                LinkedIn
              </a>
            </li>
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-red"
                href="#"
              >
                Spotify
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <div className="mx-auto lg:mx-0 w-fit text-gray-400 mb-3">
            Quick Links
          </div>
          <ul className="mb-2">
            <li className="mb-1">
              <a
                className="cursor-pointer transition-all duration-300 hover:text-red"
                href="#header"
              >
                Header
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-red"
                href="#how-it-works"
              >
                How it works
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-red"
                href="#recent-work"
              >
                Recent Work
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-red"
                href="#scope-of-work"
              >
                Scope of work
              </a>
            </li>
            <li className="mb-1">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-red"
                href="#get-started"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <div className="mx-auto lg:mx-0 w-fit text-gray-400 mb-3">
            Support
          </div>
          <p className="mb-2">
            <a
              className="transition-all cursor-pointer duration-300 hover:text-red"
              href="mailto:info@magpollo.com"
            >
              info@magpollo.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
