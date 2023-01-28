import { useState } from 'react';

const ServicesCard = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <span
      className={`inline-block mr-4 mb-4 cursor-pointer w-fit p-4 rounded-md ${
        clicked ? 'border border-[#B80C09] bg-white' : 'bg-[#EDEDF2]'
      }`}
      onClick={() => setClicked(!clicked)}
    >
      {clicked ? (
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          className="inline-block mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1675 1.98096L4.91748 10.231L1.16748 6.48096"
            stroke="#B80C09"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          className="inline-block mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.07081 3.48095V15.481"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.0708 9.48096H15.0708"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="font-sans">{children}</span>
    </span>
  );
};

export default ServicesCard;
