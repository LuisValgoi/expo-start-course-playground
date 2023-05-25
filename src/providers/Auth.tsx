import { auth } from 'src/services/firebase';
import { Unsubscribe, User } from 'firebase/auth';
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export type AuthContextValue = {
  loggedUser: User | null | undefined;
  unsubscribe: Unsubscribe[];
  setLoggedUser: Dispatch<SetStateAction<User | null | undefined>>;
  setUnsubscribe: Dispatch<SetStateAction<Unsubscribe[]>>;
};

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<User | null | undefined>();
  const [unsubscribe, setUnsubscribe] = useState<Unsubscribe[]>([]);

  useEffect(() => {

    const unsubscribeAuth = auth.onIdTokenChanged((user) => {
      if (user) {
        setLoggedUser(user);
      } else {
        setLoggedUser(null);
      }
    });

    setUnsubscribe((prev) => [...prev, unsubscribeAuth]);

    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        unsubscribe,
        setLoggedUser,
        setUnsubscribe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
