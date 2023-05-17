import React from 'react';
import { Box } from 'native-base';

import { ScreenProps } from 'src/interfaces/interfaces';
import useNewsDetail from 'src/screens/NewsDetail/useNewsDetail';
import NewsDetailScreenComp from 'src/components/_screens_/NewsDetail';
import LoadingIndicator from 'src/components/_shared_/LoadingIndicator';

type NewsDetailProp = ScreenProps<'NewsDetail'>;

const NewsDetail: React.FC<NewsDetailProp> = ({ route }) => {
  const { loading, post } = useNewsDetail(route.params.id);

  return (
    <Box bg="gray.100" p="6" pl="2" pr="2" mt="1/4" height="full">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <NewsDetailScreenComp post={post} />
      )}
    </Box>
  );
};

export default NewsDetail;
