import { Button, SmallCard } from '../components';

const Homepage = () => {
  return (
    <div className="bg-cream h-full w-full overflow-hidden">
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
      <div className="w-full h-fit grid lg:grid-cols-4 lg:grid-rows-1 gap-3 mb-24">
        <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
        <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
        <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
        <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
      </div>
    </div>
  );
};

export default Homepage;
