import React from 'react';
import { Box, Spinner } from 'native-base';

import { PageProps } from 'src/interfaces/interfaces';
import useNewsDetail from 'src/hooks/useNewsDetail';
import NewsItem from 'src/components/NewsItem';
import { ScrollView } from 'react-native-gesture-handler';

type NewsDetailProp = PageProps<'NewsDetail'>;

const NewsDetail: React.FC<NewsDetailProp> = ({ route }) => {
  const { loading, post } = useNewsDetail(route.params.url);

  const renderContent = () => {
    if (loading) {
      return <Spinner color="red" accessibilityLabel="Loading..." />;
    }

    return (
      <NewsItem
        title={post?.title!}
        uri={post?.urlToImage!}
        description={post?.description!}
      />
    );
  };

  return (
    <Box bg="gray.100" p="6" pl="2" pr="2" mt="1/4" height="full">
      <ScrollView>{renderContent()}</ScrollView>
    </Box>
  );
};

export default NewsDetail;
