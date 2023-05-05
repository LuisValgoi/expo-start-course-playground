import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: {};
  NewsDetail: { url: string };
};

export type PageProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type ComponentProps<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type NewsItemAPIProps = {
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
