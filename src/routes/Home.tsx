import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// interfaces
import { NewsItemAPIProps, PageProps } from '../interfaces/interfaces';

// hooks
import useHome from '../hooks/useHome';

// styles
import styles from '../styles/home';

type HomeProps = PageProps<'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { loading, news } = useHome();

  const renderStoryItem = ({ item }: ListRenderItemInfo<NewsItemAPIProps>) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
      >
        <View style={styles.listings}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.thumbnail} source={{ uri: item.urlToImage }} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  if (loading) {
    return <ActivityIndicator />;
  }

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
