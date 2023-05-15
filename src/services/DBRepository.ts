import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LoggedUserData,
  SaveLoggedUserParams,
} from 'src/interfaces/interfaces';

const userPrefix = '@USER_';
const userGet = async (email: string) => {
  try {
    const key = `${userPrefix}${email}`.toUpperCase();
    const data = await AsyncStorage.getItem(key);
    if (data == null) {
      throw Error();
    }
    return JSON.parse(data) as LoggedUserData;
  } catch (error) {
    return undefined;
  }
};

const userSave = async (params: SaveLoggedUserParams) => {
  const key = `${userPrefix}${params.email}`.toUpperCase();
  await AsyncStorage.setItem(key, JSON.stringify(params));
};

const rememberPrefix = '@REMEMBER_LAST';
const rememberGet = async () => {
  try {
    const key = `${rememberPrefix}`.toUpperCase();
    const data = await AsyncStorage.getItem(key);
    if (data == null) {
      throw Error();
    }
    return JSON.parse(data) as boolean;
  } catch (error) {
    return undefined;
  }
};
const rememberSaveLast = async (value: boolean) => {
  const key = `${rememberPrefix}`.toUpperCase();
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export default {
  user: {
    get: userGet,
    save: userSave,
  },
  remember: {
    get: rememberGet,
    saveLast: rememberSaveLast,
  },
};
