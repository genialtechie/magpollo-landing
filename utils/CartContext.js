import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from 'react';
import { initialState, reducer } from './Reducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartOpen, setCartOpen] = useState(false);
  const [hours, setHours] = useState('Closed');

  useEffect(() => {
    // get the current date, day, and time
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    // Set the hours to open if it'a weekday between 8am and 8pm or saturday between 9am and 7pm or sunday between 9am and 8pm
    if (
      (day > 0 && day < 6 && hour >= 8 && hour < 20) ||
      (day === 6 && hour >= 9 && hour < 19) ||
      (day === 0 && hour >= 9 && hour < 20)
    ) {
      setHours('Open');
    } else if (
      (day >= 0 && day < 6 && hour > 18 && hour < 20) ||
      (day === 6 && hour > 17 && hour < 19)
    ) {
      setHours('Closing Soon');
    } else {
      setHours('Closed');
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        cartOpen,
        setCartOpen,
        hours,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
