import { useState, useEffect } from 'react';
import {
  ServicesCard,
  DragNDrop,
  ButtonDisabled,
  Button,
  LetsBuildForm,
} from '../components';
import { services } from '../utils/services';

const LetsBuild = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [file, setFile] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleFileChange(file) {
    setFile(file);
  }

  function handlePageToggle() {
    showForm ? setShowForm(false) : setShowForm(true);
  }

  return (
    <>
      <div
        className={`${showForm ? 'hidden' : 'block'} md:w-9/12 mx-auto h-fit`}
      >
        <h1 className="text-red text-5xl font-mono uppercase font-bold mb-10">
          Let&apos;s Build
        </h1>
        <div className="w-full h-fit mb-10 flex flex-row">
          <div className="mx-2 w-1/2 bg-red h-1"></div>
          <div className="bg-gray-300 mx-2 w-1/2 h-1"></div>
        </div>
        <p className="font-sans mb-16">
          To start the building process, kindly provide us with details about
          your project or desired development, as well as your personal and
          company information.
        </p>
        <h1 className="text-gray-500 font-sans text-xl font-bold mb-5">
          I&apos;m interested in..
        </h1>
        <div className="flex flex-row flex-wrap mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                if (selectedServices.includes(service.title)) {
                  setSelectedServices(
                    selectedServices.filter(
                      (selectedService) => selectedService !== service.title
                    )
                  );
                } else {
                  setSelectedServices([...selectedServices, service.title]);
                }
              }}
            >
              <ServicesCard>{service.title}</ServicesCard>
            </div>
          ))}
        </div>
        <h1 className="text-gray-500 font-sans text-xl font-bold mb-5">
          Upload relevant file
        </h1>
        <DragNDrop handleChange={handleFileChange} />
        {selectedServices.length > 0 ? (
          <Button
            className="my-14 mx-auto"
            onClick={(e) => {
              e.preventDefault();
              handlePageToggle();
            }}
          >
            Next
          </Button>
        ) : (
          <ButtonDisabled className="my-14 mx-auto">Next</ButtonDisabled>
        )}
      </div>

      {showForm && <LetsBuildForm hide={handlePageToggle} />}
    </>
  );
};

export default LetsBuild;
