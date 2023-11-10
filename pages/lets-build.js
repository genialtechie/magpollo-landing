import { useState } from 'react';
import {
  ServicesCard,
  ButtonDisabled,
  Button,
  LetsBuildForm,
  LetsBuildLayout,
} from '../components';
import { services } from '../utils/services';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = [
  'JPG',
  'PNG',
  'GIF',
  'MP4',
  'PDF',
  'DOC',
  'DOCX',
  'PPT',
  'PPTX',
  'PSD',
  'AI',
];

const servicesWithOther = [...services, { title: 'Other', id: 'other' }];

export default function LetsBuild() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [file, setFile] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handlePageToggle() {
    showForm ? setShowForm(false) : setShowForm(true);
  }

  return (
    <>
      <div
        className={`${
          showForm ? 'hidden' : 'block'
        } px-5 md:w-9/12 mx-auto h-fit`}
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
          {servicesWithOther.map((service) => (
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
        <FileUploader
          handleChange={(file) => {
            setFile(file);
          }}
          types={fileTypes}
        >
          <div className="w-fit px-5 md:w-full h-40 bg-red/5 mb-5 rounded-lg border-2 border-dashed border-[#666666] flex flex-col items-center justify-center font-sans text-lg cursor-pointer">
            {file ? (
              <>
                <h1 className="text-red font-bold mb-2">File Uploaded</h1>
                <p className="mb-1">{file.name}</p>
                <p className="text-gray-500">{file.type}</p>
              </>
            ) : (
              <>
                <p className="mb-2">
                  Drag & drop files or{' '}
                  <span className="text-red underline">Browse</span>
                </p>
                <p className="text-gray-500">
                  Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                  PPT
                </p>
              </>
            )}
          </div>
        </FileUploader>
        {selectedServices.length > 0 || file ? (
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

      {showForm && (
        <LetsBuildForm
          services={selectedServices}
          file={file}
          hide={handlePageToggle}
        />
      )}
    </>
  );
}

LetsBuild.getLayout = (page) => {
  return <LetsBuildLayout>{page}</LetsBuildLayout>;
};
