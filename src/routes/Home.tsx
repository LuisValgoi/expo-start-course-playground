import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  View,
} from 'react-native';

// interfaces
import { NewsListItemAPIProps, PageProps } from '../interfaces/interfaces';

// hooks
import useHome from '../hooks/useHome';

// styles
import styles from '../styles/home';

// components
import NewsListItem from '../components/NewsListItem';

type HomeProps = PageProps<'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { loading, news } = useHome();

  if (loading) {
    return <ActivityIndicator />;
  }

  const renderStoryItem = ({
    item,
  }: ListRenderItemInfo<NewsListItemAPIProps>) => {
    return (
      <NewsListItem
        onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
        title={item.title}
        uri={item.urlToImage}
        description={item.description}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

export default Home;
