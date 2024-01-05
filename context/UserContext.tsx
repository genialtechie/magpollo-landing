import { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext<{
  user:
    | {
        name?: string;
        email?: string;
        cars?: {
          id: string;
          year: string;
          make: string;
          model: string;
          engine?: string;
          vin?: string;
          mileage?: number;
          transmission?: string;
        }[];
        id?: string;
        isSuscribed?: boolean;
        stripeId?: string;
      }
    | undefined;
  setUser: (newUser: object) => void;
}>({ user: {}, setUser: () => {} });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});

  //fetch user from api/user endpoint on page load
  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAtlasUser = () => useContext(UserContext);
