import React from 'react';
import { Box } from 'native-base';

import NewsScreenComp from 'src/components/_screens_/News';
import { INews, ScreenProps } from 'src/interfaces/interfaces';
import useNews from 'src/screens/News/useNews';
import LoadingIndicator from 'src/components/_shared_/LoadingIndicator';

type NewsProps = ScreenProps<'News'>;

const News: React.FC<NewsProps> = ({ navigation }) => {
  const { loading, news } = useNews();

  const handleItemPress = (item: INews) => {
    navigation.navigate('NewsDetail', { id: item.id });
  };

  return (
    <Box bg="gray.100" pt="6" pl="2" pr="2" mt="1/4">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <NewsScreenComp onItemPress={handleItemPress} news={news} />
      )}
    </Box>
  );
};

export default News;
