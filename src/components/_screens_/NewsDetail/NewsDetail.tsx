import React from 'react';

import { PostAPIProps } from 'src/interfaces/interfaces';
import { ScrollView } from 'react-native-gesture-handler';
import NewsItem from 'src/components/_application_/News/NewsItem';

type NewsDetailScreenCompProps = {
  post: PostAPIProps | undefined;
};

const NewsDetailScreenComp: React.FC<NewsDetailScreenCompProps> = ({
  post,
}) => {
  return (
    <ScrollView>
      <NewsItem
        title={post?.title!}
        uri={post?.urlToImage!}
        description={post?.description!}
      />
    </ScrollView>
  );
};

export default NewsDetailScreenComp;
