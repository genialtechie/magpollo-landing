import { createContext, useContext, useState } from 'react';
import { boolean } from 'yup';

export const ErrorContext = createContext<{
  error: boolean;
  setError: (newError: boolean) => void;
  handleCloseError: () => void;
}>({
  error: false,
  setError: () => {},
  handleCloseError: () => {},
});

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<boolean>(false);

  const handleCloseError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
  };

  return (
    <ErrorContext.Provider value={{ error, setError, handleCloseError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
