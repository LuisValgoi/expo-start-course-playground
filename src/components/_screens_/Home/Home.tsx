import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { NewsListItemAPIProps } from 'src/interfaces/interfaces';
import NewsListItem from 'src/components/_application_/News/NewsListItem';

type HomeScreenCompProps = {
  onItemPress: (item: NewsListItemAPIProps) => void;
  news: ArrayLike<NewsListItemAPIProps> | null | undefined;
};

const HomeScreenComp: React.FC<HomeScreenCompProps> = ({
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
      keyExtractor={(item) => item.url}
    />
  );
};

export default HomeScreenComp;
