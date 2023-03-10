const FauxButton = ({ buttonText }) => {
  return (
    <button className="bg-cream w-fit mx- mb-5 border-[3px] rounded-md border-red text-black font-mono py-3 px-7 hover:bg-red cursor-auto hover:text-white">
      {buttonText}
    </button>
  );
};

export default FauxButton;
