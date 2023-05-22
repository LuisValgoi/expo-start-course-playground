import { signOut, AuthError } from 'firebase/auth';
import { useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { auth } from 'src/services/firebase';

export function useLogoutButton() {
  const { loggedUser, setLoggedUser } = useAuth();
  const [loading, setLoading] = useState<boolean>();

  const onLogout = async () => {
    setLoading(true);
    try {
      return await signOut(auth).then(() => {
        setLoggedUser(null);
      });
    } catch (error) {
      throw Error((error as AuthError).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    userName: loggedUser?.displayName,
    loading,
    onLogout,
  };
}
