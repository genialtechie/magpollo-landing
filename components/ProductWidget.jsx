import ProductCard from './ProductCard';

const ProductWidget = ({ products }) => {
  return (
    <div className="w-full overflow-x-scroll hide-scroll-bar overscroll-x-auto ">
      <div className="w-[1226px] lg:w-10/12 lg:mx-auto bg-theme p-5 flex flex-row justify-between">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductWidget;
