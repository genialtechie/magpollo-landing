import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="scale-90 lg:scale-95 block mx-2 w-[370px] h-fit shadow-md transition duration-300 ease-in-out hover:shadow-xl rounded-3xl hover:ring-2 hover:ring-orange hover:ring-offset-2 group">
      <Link
        href={`/products/${product.slug}`}
        key={product.id}
      >
        <Image
          src={product.image_url}
          alt={product.name}
          width={370}
          height={370}
          className="rounded-t-3xl h-[370px] w-[370px] object-cover"
        />
        <div className="p-5 bg-[#F6F0DB] font-serif text-lg rounded-b-3xl">
          <h1 className="font-bold text-custom transition duration-300 ease-in-out group-hover:text-orange">
            {product.name}
          </h1>
          <p className="text-[#111827]/70">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
