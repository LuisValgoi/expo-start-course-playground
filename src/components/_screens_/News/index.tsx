import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { NewsListItemAPIProps } from 'src/interfaces/interfaces';
import NewsListItem from 'src/components/_application_/News/NewsListItem';

type NewsScreenCompProps = {
  onItemPress: (item: NewsListItemAPIProps) => void;
  news: ArrayLike<NewsListItemAPIProps> | null | undefined;
};

const NewsScreenComp: React.FC<NewsScreenCompProps> = ({
  onItemPress,
  news,
}) => {
  const renderStoryItem = ({
    item,
  }: ListRenderItemInfo<NewsListItemAPIProps>) => {
    return (
      <NewsListItem
        onPress={() => onItemPress(item)}
        title={item.title}
        uri={item.urlToImage}
        description={item.description}
      />
    );
  };

  return (
    <FlatList
      data={news}
      renderItem={renderStoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NewsScreenComp;
