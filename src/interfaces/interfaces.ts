import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackNavigatorProps = {
  Stack: any;
};

export type RootStackParamList = {
  SignUp: {};
  SignIn: {};
  Home: {};
  About: {};
  Contact: {};
  NewsDetail: { id: string };
};

export type RootStackList = keyof RootStackParamList;

export type ScreenProps<T extends RootStackList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type ComponentProps<T extends RootStackList> = StackNavigationProp<
  RootStackParamList,
  T
>;

export type NewsListItemAPIProps = {
  id: string;
  url: string;
  title: string;
  urlToImage: string;
  description: string;
};

export type PostAPIProps = {
  url: string;
  title: string;
  urlToImage: string;
  description: string;
};

export interface LoggedUserData {
  name: string
  email: string
  password: string
}

export interface SaveLoggedUserParams {
  name: string
  email: string
  password: string
}
