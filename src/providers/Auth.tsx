import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { LoggedUserData } from 'src/interfaces/interfaces';

export type AuthContextValue = {
  loggedUser: LoggedUserData | undefined;
  setLoggedUser: Dispatch<SetStateAction<LoggedUserData | undefined>>;
};

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUserData | undefined>({ name: 'a', email: 'a@a.com', password: 'asdk'})

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
