import { SignInScreenCompFormValues } from 'src/components/_screens_/SignIn/SignIn';

import DBRepository from 'src/services/DBRepository';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

export function useSignIn() {
  const { setLoggedUser } = useAuth();
  const [redirectToHome, setRedirectToHome] = useState(false);

  const onSubmit = async (form: SignInScreenCompFormValues) => {
    try {
      await DBRepository.remember.saveLast(!!form.remember);
      const data = await DBRepository.user.get(form.email);
      const correctPassword =
        data?.email === form.email && data.password === data.password;

      if (correctPassword) {
        setLoggedUser(data);
      } else {
        setLoggedUser(undefined);
      }
    } catch (error) {
      return Promise.reject().catch(() => {
        setLoggedUser(undefined);
      });
    }
  };

  useEffect(() => {
    async function fetchRemember() {
      const data = await DBRepository.remember.get();
      setRedirectToHome(!!data);
    }
    fetchRemember();
  })

  return {
    onSubmit,
    redirectToHome
  };
}
