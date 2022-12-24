const Newsletter = () => {
  return (
    <form
      action=""
      method="post"
      className="flex flex-col"
    >
      <input
        type="email"
        name="email"
        placeholder="example@soulfood.com"
        className="w-72 lg:w-96 h-10 border-b-[3px] border-0 focus:ring-0 border-custom p-2 bg-inherit placeholder:text-custom/60 outline-none focus:border-orange mb-5"
      />
      <button className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-fit font-bold py-3 px-20 rounded-sm uppercase font-serif">
        Subscribe
      </button>
    </form>
  );
};

export default Newsletter;
