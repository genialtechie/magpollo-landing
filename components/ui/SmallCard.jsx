import Image from 'next/image';

const SmallCard = ({ image }) => {
  return (
    <div className="w-fit h-fit rounded-md">
      <Image
        src={image}
        alt="small-card"
        width={400}
        height={475}
        className="object-cover object-center rounded-md"
      />
    </div>
  );
};

export default SmallCard;
