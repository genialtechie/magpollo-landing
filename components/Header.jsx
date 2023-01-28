import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="w-full bg-cream text-lg flex flex-row justify-center items-center py-10">
      <Link href="/">
        <Image
          src="/logo-light.svg"
          alt="logo"
          width={150}
          height={50}
          className="cursor-pointer scale-125"
        />
      </Link>
    </nav>
  );
};

export default Header;
