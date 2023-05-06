import React from 'react';
import { ActivityIndicator, View } from 'react-native';
// interface
import { PageProps } from '../interfaces/interfaces';

// style
import styles from '../styles/newsDetail';

// hook
import useNewsDetail from '../hooks/useNewsDetail';

// component
import GoBackButton from '../components/GoBackButton';
import NewsItem from '../components/NewsItem';

type NewsDetailProp = PageProps<'NewsDetail'>;

const NewsDetail: React.FC<NewsDetailProp> = ({ route }) => {
  const { loading, post } = useNewsDetail(route.params.url);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator />;
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
    <View style={styles.container}>
      <GoBackButton style={{ margin: 10 }} />
      {renderContent()}
    </View>
  );
};

export default NewsDetail;
