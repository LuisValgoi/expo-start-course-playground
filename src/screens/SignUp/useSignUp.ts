import {
  AuthError,
  updateProfile,
  createUserWithEmailAndPassword as createProfile,
  User,
} from 'firebase/auth';
import { useState } from 'react';
import { SignUpScreenCompFormValues } from 'src/components/_screens_/SignUp';
import { useAuth } from 'src/hooks/useAuth';
import { auth } from 'src/services/firebase';

export function useSignUp() {
  const { loggedUser, setLoggedUser } = useAuth();
  const [loading, setLoading] = useState<boolean>();

  const onSubmit = async (form: SignUpScreenCompFormValues) => {
    setLoading(true);
    try {
      const user = await createProfile(auth, form.email, form.password);
      await updateProfile(user.user, { displayName: form.name });
      setLoggedUser((user) => ({ ...user, displayName: form.name } as User));
    } catch (error) {
      throw Error((error as AuthError).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    onSubmit,
    user: loggedUser,
    loading,
  };
}
