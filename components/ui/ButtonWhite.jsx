import Link from 'next/link';

const ButtonWhite = ({ children, className, href, onClick }) => {
  return (
    <Link
      href={href || ''}
      onClick={onClick}
    >
      <div className={className + ' ' + 'relative w-fit h-fit group'}>
        <svg
          className="object-cover w-full h-full fill-black group-hover:scale-x-105 group-hover:fill-white transition-all duration-300 ease-in-out"
          width="390"
          height="70"
          viewBox="0 0 390 70"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.1552 68.2057C19.3085 70.0586 23.4775 70.9851 29.6621 70.9851H32.0622L361.709 71.3225L364.037 71.3231C370.222 71.3231 374.391 70.3967 376.544 68.5438C378.648 66.6909 379.699 62.9977 379.699 57.4641V48.4877C379.699 46.5347 379.962 44.9322 380.488 43.6802C381.014 42.4283 381.802 41.4142 382.854 40.638C384.782 39.1858 387.586 38.4596 391.267 38.4596H392.559C393.173 38.4596 393.671 37.9618 393.671 37.3477V34.2007C393.671 33.5866 393.173 33.0888 392.559 33.0888H391.267C389.539 33.0888 387.949 32.9135 386.497 32.563C385.07 32.2124 383.856 31.6741 382.854 30.948C381.802 30.1968 381.014 29.2078 380.488 27.9809C379.962 26.7289 379.699 25.1265 379.699 23.1734V14.1595C379.699 8.60083 378.648 4.90761 376.544 3.07978C374.491 1.25194 370.322 0.338024 364.037 0.338024H361.711C361.71 0.338024 361.709 0.33898 361.709 0.340159C361.709 0.341338 361.708 0.342294 361.707 0.342293L32.0658 0.000500029L29.6621 0C23.3773 0 19.2084 0.913917 17.1552 2.74175C15.0269 4.56959 13.9627 8.26281 13.9627 13.8214V22.8354C13.9627 26.5412 13.2992 29.1327 11.9722 30.61C10.6451 32.0372 8.21633 32.7508 4.68586 32.7508H1.44104C0.826934 32.7508 0.329102 33.2486 0.329102 33.8627V37.0097C0.329102 37.6238 0.826935 38.1216 1.44104 38.1216H4.68586C8.19129 38.1216 10.6201 38.8477 11.9722 40.3C13.2992 41.7773 13.9627 44.3938 13.9627 48.1497V57.1261C13.9627 62.6847 15.0269 66.3779 17.1552 68.2057Z" />
        </svg>

        <div className="absolute m-auto inset-0 w-fit h-fit font-mono bg-transparent text-white group-hover:text-black uppercase transition-all duration-300 ease-in-out">
          {children}
        </div>
      </div>
    </Link>
  );
};

export default ButtonWhite;