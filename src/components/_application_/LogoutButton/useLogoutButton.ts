import { getAuth } from 'firebase/auth';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useAuth } from 'src/hooks/useAuth';

export function useLogoutButton() {
  const auth = getAuth();
  const [signOut, loading, error] = useSignOut(auth);
  const { loggedUser } = useAuth();

  const onLogout = async () => {
    return signOut();
  };

  return {
    userName: loggedUser?.displayName,
    loading,
    error,
    onLogout,
  };
}
