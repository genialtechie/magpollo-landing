import Image from 'next/image';
import Link from 'next/link';
import { MobileNav } from '.';

const Header = () => {
  return (
    <nav>
      <div className="bg-cream text-lg flex flex-row justify-between items-center py-10 px-10 relative">
        <span className="h-fit">
          <MobileNav />
        </span>
        <span className="absolute mx-auto inset-x-0 inset-y-0 my-auto w-fit h-fit">
          <Link href="/">
            <Image
              src="/logo-light.png"
              alt="logo"
              width={150}
              height={50}
              className="cursor-pointer scale-125"
            />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
