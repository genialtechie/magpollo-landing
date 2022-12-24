import { Close } from '../components';
import { useCart } from '../utils/CartContext';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Cart() {
  const { state, dispatch, cartOpen, setCartOpen } = useCart();

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

  useEffect(() => {
    cartOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  });
  return (
    cartOpen && (
      <div className="h-full container bg-slate-800/30 fixed inset-x-0 inset-y-0 z-50 grid grid-cols-1 lg:grid-cols-3">
        <div
          onClick={() => setCartOpen(false)}
          className="hidden lg:block bg-transparent opacity-0 lg:col-span-2 cursor-pointer"
        ></div>
        <div className="p-5 lg:p-10 bg-theme text-custom flex flex-col justify-between overflow-y-auto opacity-100">
          <div>
            <h2 className="text-3xl font-bold mb-10">
              My Cart
              <Close
                className="cursor-pointer float-right scale-150"
                onClick={() => setCartOpen(false)}
              />
            </h2>
            <div className="container h-fit">
              {state.cart.map((item) => (
                <div
                  key={item.id}
                  className="mb-10"
                >
                  <div
                    className="cursor-pointer float-right"
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: { ...item },
                      });
                      state.cart.length == 1 && setCartOpen(false);
                    }}
                  >
                    X{' '}
                  </div>

                  <div className="flex flex-row mb-2">
                    <Image
                      src={item.image_url}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="mr-5"
                    />
                    <span>
                      <h1 className="text-xl font-bold mb-5">{item.name}</h1>
                      <div>
                        <div className="h-fit w-32">
                          <div className="flex flex-row h-10 w-full rounded-sm relative bg-transparent mt-1">
                            <button
                              onClick={() => {
                                item.quantity > 1 &&
                                  dispatch({
                                    type: 'DECREASE_QUANTITY',
                                    payload: { ...item },
                                  });
                              }}
                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-sm cursor-pointer outline-none"
                            >
                              <span className="m-auto text-2xl font-thin">
                                −
                              </span>
                            </button>
                            <div className="text-center w-fit bg-gray-300 font-semibold text-md hover:text-black text-gray-700 flex items-center px-2">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => {
                                item.quantity < 5 &&
                                  dispatch({
                                    type: 'INCREASE_QUANTITY',
                                    payload: { ...item },
                                  });
                              }}
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-sm cursor-pointer"
                            >
                              <span className="m-auto text-2xl font-thin">
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </span>
                    <span className="ml-4 mb-6">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-fit container">
            <hr className="bg-custom h-1 mb-5" />
            <div className="flex flex-row justify-between mb-2">
              <h1 className="text-xl font-bold">Subtotal</h1>
              <span>
                $
                {state.cart.reduce((accumulator, obj) => {
                  return accumulator + obj.price * obj.quantity;
                }, 0)}
              </span>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <span className="text-lg">Taxes</span>
              <span>Calculated at checkout</span>
            </div>
            <button
              type="submit"
              className="bg-orange text-theme transition duration-300 ease-in-out hover:bg-custom hover:text-orange w-full font-bold py-3 px-16 rounded-sm uppercase font-serif"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    )
  );
}
