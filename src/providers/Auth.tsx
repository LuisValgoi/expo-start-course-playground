import { onAuthStateChanged, User } from 'firebase/auth';
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { auth } from 'src/services/firebase';

export type AuthContextValue = {
  loggedUser: User | null | undefined;
  setLoggedUser: Dispatch<SetStateAction<User | null | undefined>>;
};

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<User | null | undefined>();

  useEffect(() => {
    async function fetch() {
      onAuthStateChanged(auth, (user) => {
        setLoggedUser(user);
      });
    }

    fetch();
  }, []);

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
