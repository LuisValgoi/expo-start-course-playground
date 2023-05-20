import { getAuth } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AuthContext } from 'src/providers/Auth';

export function useAuth() {
  const context = useContext(AuthContext);
  const auth = getAuth();
  const [user] = useAuthState(auth);

  useEffect(() => {
    context.setLoggedUser(user);
  }, [user]);

  return {
    ...context,
  };
}
