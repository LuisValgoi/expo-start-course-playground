import { SignInScreenCompFormValues } from 'src/components/_screens_/SignIn';
import { useAuth } from 'src/hooks/useAuth';

export function useSignIn() {
  const { setLoggedUser } = useAuth();

  const onSubmit = async (form: SignInScreenCompFormValues) => {
    return Promise.resolve();
  };

  return {
    onSubmit,
  };
}
