import Button from './ui/Button';

const Homepage = () => {
  return (
    <div className="bg-cream h-full w-full">
      <div className="lg:w-1/3 mx-auto py-20">
        <h1 className="text-6xl uppercase font-bold text-center lg:mb-8 leading-tight">
          <span className="text-black">Ascend to</span>
          <br />
          <span className="text-red">
            Digital <br /> excellence
          </span>
        </h1>
        <p className="text-center text-black lg:mb-8">
          The key to elevating your digital game and standing out
        </p>
        <Button className="mx-auto">Let&apos;s Build</Button>
      </div>
    </div>
  );
};

export default Homepage;
