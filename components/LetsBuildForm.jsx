const LetsBuildForm = ({ hide }) => {
  return (
    <div className="md:w-9/12 mx-auto h-fit">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-red text-5xl font-mono uppercase font-bold mb-10">
          Let&apos;s Build
        </h1>
        <div
          className="cursor-pointer text-lg font-sans hover:text-red"
          onClick={hide}
        >
          Go back
        </div>
      </div>

      <div className="w-full h-fit mb-10 flex flex-row">
        <div className="mx-2 w-1/2 bg-red h-1"></div>
        <div className="bg-red mx-2 w-1/2 h-1"></div>
      </div>
      <p className="font-sans mb-16">
        To start the building process, kindly provide us with details about your
        project or desired development, as well as your personal and company
        information.
      </p>
      <h1 className="text-gray-500 font-sans text-xl font-bold mb-5">
        Your Info
      </h1>
    </div>
  );
};

export default LetsBuildForm;
