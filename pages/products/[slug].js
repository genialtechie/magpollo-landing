import { useState } from 'react';
import Image from 'next/image';
import { getAvailableProducts } from '../../prisma/queries';
import { QtySelector } from '../../components';
import { useCart } from '../../utils/CartContext';

export default function Product({ product }) {
  const [qty, setQty] = useState(1);
  const { state, dispatch, setCartOpen } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: qty },
    });
    setCartOpen(true);
  };

  async function handleCheckout() {
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: state.cart,
      }),
    });
    const session = await response.json();
    window.location.href = session.url;
  }
  return (
    <div className="container h-fit grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 relative">
        <div className="flex justify-center p-20 items-center bg-theme">
          <Image
            src={product.image_url}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-3xl scale-150 lg:scale-110"
          />
        </div>
        <div className="absolute top-0 left-0 max-w-xl">
          <h3 className="text-3xl px-8 py-4 font-extrabold min-w-[200px] text-center bg-custom/70 text-white">
            {product.name}
          </h3>
          <p className="text-xl w-fit px-8 py-4 bg-custom/70 text-white">
            {product.price} USD
          </p>
        </div>
      </div>
      <div className="lg:col-span-1 px-10 py-5">
        <p className="mb-5 text-xl text-custom font-sans">
          {product.description}
        </p>
        <QtySelector
          min={1}
          max={5}
          className="mb-5 block"
          value={qty}
          setValue={setQty}
        />
        <button
          type="submit"
          className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-fit font-bold py-3 px-16 lg:px-20 mx-auto lg:mx-0 rounded-sm uppercase font-serif mb-5"
          onClick={addToCart}
        >
          Add to cart
        </button>
        <button
          type="submit"
          className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-fit font-bold py-3 px-16 lg:px-20 mx-auto lg:mx-0 rounded-sm uppercase font-serif"
          onClick={handleCheckout}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAvailableProducts();
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const products = await getAvailableProducts();
  const product = products.find((product) => product.slug === params.slug);

  return {
    props: {
      product,
    },
  };
}
