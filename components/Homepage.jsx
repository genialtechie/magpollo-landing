import { Button, SmallCard } from '../components';
import archivo from '../assets/img/archivo.png';
import loudr from '../assets/img/loudr.png';
import refinable from '../assets/img/refinable.png';
import mma from '../assets/img/mma.png';

const Homepage = () => {
  return (
    <div className="bg-cream h-full w-full overflow-hidden">
      <div className="lg:w-1/3 mx-auto py-20 px-5 lg:px-0">
        <h1 className="lg:text-6xl text-4xl uppercase font-bold font-mono text-center mb-8 leading-snug lg:leading-tight">
          <span className="text-black">Ascend to</span>
          <br />
          <span className="text-red">
            Digital <br /> excellence
          </span>
        </h1>
        <p className="text-center font-sans text-black mb-8 px-">
          The key to elevating your digital game and standing out
        </p>
        <Button
          href="/lets-build"
          className="mx-auto"
        >
          Let&apos;s Build
        </Button>
      </div>
      <div className="mx-auto w-full h-fit grid grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-5 mb-24 overflow-hidden">
        <SmallCard
          className="hidden lg:block"
          image={archivo}
        />
        <SmallCard image={loudr} />
        <SmallCard image={refinable} />
        <SmallCard
          className="hidden lg:block"
          image={mma}
        />
      </div>
    </div>
  );
};

export default Homepage;
