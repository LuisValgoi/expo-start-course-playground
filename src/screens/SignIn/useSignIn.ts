import { getAuth } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { SignInScreenCompFormValues } from 'src/components/_screens_/SignIn';
import { useAuth } from 'src/hooks/useAuth';

export function useSignIn() {
  const auth = getAuth();
  const [signIn, _, loading, error] = useSignInWithEmailAndPassword(auth);
  const { loggedUser } = useAuth();

  const onSubmit = async (form: SignInScreenCompFormValues) => {
    return signIn(form.email, form.password);
  };

  return {
    loggedUser,
    loading,
    error,
    onSubmit,
  };
}
