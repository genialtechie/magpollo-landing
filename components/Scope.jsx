import React from 'react';
import { FauxButton } from '../components';
import { services } from '../utils/services';

const Scope = () => {
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
      <div className="h-fit w-3/4 flex justify-evenly flex-row flex-wrap mt-10 content-around mx-auto">
        {services.map((service) => (
          <FauxButton
            key={service.id}
            buttonText={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Scope;
