const Newsletter = ({ className }) => {
  return (
    <form
      action=""
      method="post"
      className={className + ' p-5 lg:p-0 lg:w-80'}
    >
      <input
        type="email"
        name="email"
        placeholder="example@soulfood.com"
        className="w-full placeholder:font-sans rounded-sm h-10 focus:border-[2px] border-0 focus:ring-0 p-2 bg-slate-200/30 placeholder:text-custom/60 outline-none focus:border-orange mb-5"
      />
      <button className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-black hover:text-orange w-full font-bold py-3 px-20 rounded-sm uppercase font-serif">
        Subscribe
      </button>
    </form>
  );
};

export default Newsletter;
