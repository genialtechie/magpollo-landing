import Image from 'next/image';

const SmallCard = ({ image, className }) => {
  return (
    <div className={className + ' ' + 'w-fit h-fit rounded-md'}>
      <Image
        src={image}
        alt="small-card"
        width={400}
        height={475}
        className="object-cover object-center rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default SmallCard;
