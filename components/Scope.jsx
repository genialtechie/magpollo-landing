import { useState } from 'react';
import { FauxButton } from '../components';
import { services } from '../utils/services';

const Scope = () => {
  const [showBtn, setShowBtn] = useState({
    services: services,
    itemsToShow: 7,
    expanded: false,
  });

  function handleClick(e) {
    e.preventDefault();
    showBtn.itemsToShow === 7
      ? setShowBtn({
          services: showBtn.services,
          itemsToShow: showBtn.services.length,
          expanded: true,
        })
      : setShowBtn({
          services: showBtn.services,
          itemsToShow: 7,
          expanded: false,
        });
  }

  return (
    <div className="bg-white py-10 px-10 items-center relative text-center text-black ">
      <div className="mx-auto w-fit">
        <h1 className="font-mono text-5xl uppercase whitespace-normal">
          <span className="text-red">One-stop-shop</span>
          <br /> for all your
          <br /> digital needs
        </h1>
      </div>
      <p className="font-sans mt-4">
        We are your go-to source for comprehensive digital solutions
      </p>
      <div className="h-fit w-3/4 hidden md:flex justify-evenly flex-row flex-wrap my-10 content-around mx-auto">
        {services.map((service) => (
          <FauxButton
            key={service.id}
            buttonText={service.title}
          />
        ))}
      </div>
      <div className="md:hidden">
        <div className="h-fit w-3/4 flex justify-evenly flex-row flex-wrap my-10 content-around mx-auto">
          {showBtn.services.slice(0, showBtn.itemsToShow).map((service) => (
            <FauxButton
              key={service.id}
              buttonText={service.title}
            />
          ))}
        </div>
        {showBtn.expanded ? (
          <button
            onClick={handleClick}
            className="text-red text-xl font-mono w-fit h-hit mx-auto font-bold underline hover:before:content-['↑'] hover:before:block hover:before:mb-2"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="text-red text-xl font-mono w-fit h-hit mx-auto font-bold underline hover:after:content-['↓'] hover:after:block hover:after:mb-2"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Scope;
