import { SignUpScreenCompFormValues } from 'src/components/_screens_/SignUp';

export function useSignUp() {
  const onSubmit = async (form: SignUpScreenCompFormValues) => {
    return Promise.resolve();
  };

  return {
    onSubmit,
  };
}
