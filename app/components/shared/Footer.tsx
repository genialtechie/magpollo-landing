import ButtonInverted from './ButtonInverted';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="h-fit w-full bg-off-white text-black/40 relative bottom-0 left-0 py-5 px-10">
      <div className="container mx-auto py-10">
        <p className="text-3xl md:text-5xl mb-9 max-w-md md:max-w-2xl">
          Become your own car expert, with help.
        </p>
        {/* <ButtonInverted
          href="/api/auth/login"
          className="px-10 py-3 md:text-xl"
        >
          Get Started
        </ButtonInverted> */}
        <ButtonInverted
          href="/#subscribe"
          className="px-10 py-3 md:text-xl"
        >
          Get Started
        </ButtonInverted>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-around p-5 border-t border-t-black/50">
        <div className="mb-5 lg:m-0">
          <Image
            src="/logo-mm.svg"
            alt="MotorMentor"
            width={150}
            height={50}
            priority
          />{' '}
          <p className="pl-5 text-sm">
            built by{' '}
            <a href="https://magpollo.com">
              <Image
                src="/magpollo-logo.png"
                alt="Magpollo"
                width={50}
                height={50}
                className="inline"
                priority
              />
            </a>
          </p>
        </div>
        <div className="pl-5 lg:pl-0 grid grid-cols-1 auto-cols-max lg:grid-rows-1 lg:grid-cols-3 gap-y-8 lg:gap-5">
          <div>
            <div className="w-fit text-black/50 font-extrabold mb-3">
              Find Us
            </div>
            <ul className="mb-2">
              <li className="mb-1">
                <a
                  className="cursor-pointer transition-all duration-300 hover:text-primary text-sm"
                  href="http://instagram.com/magpollotech"
                >
                  Instagram
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="cursor-pointer transition-all duration-300 hover:text-primary text-sm"
                  href="http://twitter.com/magpollotech"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="cursor-pointer transition-all duration-300 hover:text-primary text-sm"
                  href="http://linkedin.com/company/magpollo"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="cursor-pointer transition-all duration-300 hover:text-primary text-sm"
                  href="#"
                >
                  Spotify
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="w-fit text-black/50 font-bold mb-3">
              Quick Links
            </div>
            <ul className="mb-2">
              <li className="mb-1">
                <a
                  className="cursor-pointer transition-all duration-300 hover:text-primary text-sm"
                  href="#header"
                >
                  Header
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="transition-all cursor-pointer duration-300 hover:text-primary text-sm"
                  href="#features"
                >
                  How it works
                </a>
              </li>
              
              <li className="mb-1">
                <a
                  className="transition-all cursor-pointer duration-300 hover:text-primary text-sm"
                  href="https://github.com/magpollo"
                  target='_blank'
                >
                  Recent work
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="transition-all cursor-pointer duration-300 hover:text-primary text-sm"
                  href="#subscribe"
                >
                  Get started
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="w-fit text-black/50 font-bold mb-3">Support</div>
            <p className="mb-2">
              <a
                className="transition-all cursor-pointer duration-300 hover:text-primary text-sm"
                href="mailto:salesteam@magpollo.com"
              >
                salesteam@magpollo.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
