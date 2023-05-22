import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { INews } from 'src/interfaces/interfaces';
import NewsListItem from 'src/components/_application_/News/NewsListItem';
import { Center, Text } from 'native-base';

type NewsScreenCompProps = {
  empty?: boolean;
  news: ArrayLike<INews> | null | undefined;
  onItemPress: (item: INews) => void;
};

const NewsScreenComp: React.FC<NewsScreenCompProps> = ({
  empty,
  news,
  onItemPress,
}) => {
  if (empty) {
    return (
      <Center>
        <Text>No news to show!</Text>
      </Center>
    );
  }

  const renderStoryItem = ({ item }: ListRenderItemInfo<INews>) => {
    return (
      <NewsListItem
        key={item.id || item.title}
        onPress={() => onItemPress(item)}
        title={item.title}
        imagePath={item.imagePath}
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
