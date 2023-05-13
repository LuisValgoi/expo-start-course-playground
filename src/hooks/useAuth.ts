import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_USER_PREFIX = `@USER_`;

type GetUserData = {
  name: string;
  email: string;
  password: string;
};

type GetUserHook = {
  getUser: (email: string) => Promise<GetUserData | undefined>;
};

export function useGetUser(): GetUserHook {
  const getUser = useCallback(async (email: string) => {
    try {
      const data = await AsyncStorage.getItem(`${AUTH_USER_PREFIX}${email}`);
      if (data == null) {
        throw Error();
      }
      return JSON.parse(data) as GetUserData;
    } catch (error) {
      return undefined;
    }
  }, []);

  return {
    getUser,
  };
}

type SaveUserParams = {
  name: string;
  email: string;
  password: string;
};

export function useSaveUser() {
  const [success, setSuccess] = useState<boolean | undefined>();
  const [error, setError] = useState<boolean | undefined>();
  const [isLoading, setIsLoading] = useState<boolean | undefined>();

  const handleSave = useCallback(
    async (params: SaveUserParams) => {
      setIsLoading(true);
      try {
        const key = `${AUTH_USER_PREFIX}${params.email}`;
        await AsyncStorage.setItem(key, JSON.stringify(params));
        setSuccess(true);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [setSuccess, setError, setIsLoading]
  );

  return {
    handleSave,
    success,
    error,
    isLoading,
  };
}
