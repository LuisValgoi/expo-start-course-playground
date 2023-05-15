import { useAuth } from 'src/hooks/useAuth';
import DBRepository from 'src/services/DBRepository';

export function useLogoutButton() {
  const { loggedUser, setLoggedUser } = useAuth();

  const onLogout = async () => {
    return await DBRepository.remember.saveLast(false).then(() => {
      setLoggedUser(undefined);
    });
  };

  return {
    userName: loggedUser?.name,
    onLogout,
  };
}
