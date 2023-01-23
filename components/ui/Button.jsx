import Image from 'next/image';
import Link from 'next/link';

const Button = ({ children, className, href }) => {
  return (
    <Link href={href || ''}>
      <div className={className + ' ' + 'relative w-fit h-fit group'}>
        <Image
          src="/button.png"
          alt="button"
          width={200}
          height={70}
          className="object-cover w-full h-full group-hover:scale-x-110 transition-all duration-300 ease-in-out"
        />
        <div className="absolute m-auto inset-0 w-fit h-fit font-mono bg-transparent text-white uppercase group-hover:text-red transition-all duration-300 ease-in-out">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default Button;
