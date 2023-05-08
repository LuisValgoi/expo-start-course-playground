import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: {};
  About: {};
  Catalog: {};
  Contact: {};
  NewsDetail: { url: string };
};

export type RootStackList = keyof RootStackParamList;

export type PageProps<T extends RootStackList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type ComponentProps<T extends RootStackList> = StackNavigationProp<
  RootStackParamList,
  T
>;

export type NewsListItemAPIProps = {
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
