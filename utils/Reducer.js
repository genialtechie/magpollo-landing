import Cookies from 'js-cookie';

const initialState = {
  cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload;
      const productInCart = state.cart.find((item) => item.id === product.id);
      const newCart = productInCart
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          )
        : [...state.cart, product];
      Cookies.set('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    case 'REMOVE_FROM_CART': {
      const product = action.payload;
      const newCart = state.cart.filter((item) => item.id !== product.id);
      Cookies.set('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    case 'DECREASE_QUANTITY': {
      const product = action.payload;
      const newCart = state.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      Cookies.set('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    case 'INCREASE_QUANTITY': {
      const product = action.payload;
      const newCart = state.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      Cookies.set('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
