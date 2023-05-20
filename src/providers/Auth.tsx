import { User } from 'firebase/auth';
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
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
  const [loggedUser, setLoggedUser] = useState<User | null | undefined>(null)

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        setLoggedUser
      }}
    >
      <>{children}</>
    </AuthContext.Provider>
  )
}

export default AuthProvider
