import React from 'react';
import { Box } from 'native-base';

import { ScreenProps } from 'src/interfaces/interfaces';
import useNewsDetail from 'src/screens/NewsDetail/useNewsDetail';
import NewsDetailScreenComp from 'src/components/_screens_/NewsDetail';
import LoadingIndicator from 'src/components/_shared_/LoadingIndicator';

type NewsDetailProp = ScreenProps<'NewsDetail'>;

const NewsDetail: React.FC<NewsDetailProp> = ({ navigation, route }) => {
  const { loading, news } = useNewsDetail(route.params.id);

  const handleNewsEditPress = () => {
    navigation.navigate('NewsEdit', { id: news.id });
  };

  return (
    <Box bg="gray.100" p="6" pl="2" pr="2" mt="1/4" height="full">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <NewsDetailScreenComp
          onNewsEditPress={handleNewsEditPress}
          newsDetail={news}
        />
      )}
    </Box>
  );
};

export default NewsDetail;
