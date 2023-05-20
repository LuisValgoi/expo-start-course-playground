import { getAuth } from 'firebase/auth';
import {
  useUpdateProfile,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { SignUpScreenCompFormValues } from 'src/components/_screens_/SignUp';

export function useSignUp() {
  const auth = getAuth();
  const [update, uUpdating, uError] = useUpdateProfile(auth);
  const [create, _, cUpdating, cError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (form: SignUpScreenCompFormValues) => {
    await create(form.email, form.password);
    return await update({ displayName: form.name });
  };

  return {
    onSubmit,
    loading: cUpdating || uUpdating,
    error: cError || uError,
  };
}
