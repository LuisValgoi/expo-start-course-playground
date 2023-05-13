import React from 'react';
import { Box, Spinner } from 'native-base';

import { ScreenProps } from 'src/interfaces/interfaces';
import useNewsDetail from 'src/hooks/useNewsDetail';
import NewsDetailScreenComp from 'src/components/_screens_/NewsDetail/NewsDetail';

type NewsDetailProp = ScreenProps<'NewsDetail'>;

const NewsDetail: React.FC<NewsDetailProp> = ({ route }) => {
  const { loading, post } = useNewsDetail(route.params.url);

  return (
    <Box bg="gray.100" p="6" pl="2" pr="2" mt="1/4" height="full">
      {loading ? (
        <Spinner color="red" accessibilityLabel="Loading..." />
      ) : (
        <NewsDetailScreenComp post={post} />
      )}
    </Box>
  );
};

export default NewsDetail;
