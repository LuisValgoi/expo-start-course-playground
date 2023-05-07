import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native';
import { Box } from 'native-base';

import { NewsListItemAPIProps, PageProps } from 'src/interfaces/interfaces';
import useHome from 'src/hooks/useHome';
import NewsListItem from 'src/components/NewsListItem';

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
    <Box bg="gray.100" p="6" pl="2" pr="2" mt="1/4">
      <FlatList
        data={news}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.url}
      />
    </Box>
  );
};

export default Home;
