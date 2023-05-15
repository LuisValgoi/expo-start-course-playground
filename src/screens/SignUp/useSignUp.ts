import DBRepository from 'src/services/DBRepository';
import { SignUpScreenCompFormValues } from 'src/components/_screens_/SignUp/SignUp';

export function useSignUp() {
  const onSubmit = async (form: SignUpScreenCompFormValues) => {
    return await DBRepository.user.save(form);
  };

  return {
    onSubmit,
  };
}
