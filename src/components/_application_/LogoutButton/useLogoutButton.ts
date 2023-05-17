import { useAuth } from 'src/hooks/useAuth';

export function useLogoutButton() {
  const { loggedUser, setLoggedUser } = useAuth();

  const onLogout = async () => {
    setLoggedUser(undefined);
  };

  return {
    userName: loggedUser?.name,
    onLogout,
  };
}
