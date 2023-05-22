import { auth } from 'src/services/firebase';
import { User } from 'firebase/auth';
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
  setLoggedUser: Dispatch<SetStateAction<User | null | undefined>>;
};

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [listenUser, setListenUser] = useState(false);
  const [loggedUser, setLoggedUser] = useState<User | null | undefined>();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged((result) => {
      setLoggedUser(result);
      if (!listenUser) {
        setListenUser(true);
      }
    });

    return () => {
      if (authListener) {
        authListener();
      }
    };
  }, [listenUser]);

  useEffect(() => {
    let userListener: () => void;

    if (listenUser) {
      userListener = auth.onIdTokenChanged((result) => {
        setLoggedUser(result);
      });
    }

    return () => {
      if (userListener) {
        userListener();
      }
    };
  }, [listenUser]);

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
