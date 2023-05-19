import React from 'react';

import { INews } from 'src/interfaces/interfaces';
import { ScrollView } from 'react-native-gesture-handler';
import NewsItem from 'src/components/_application_/News/NewsItem';
import { Button, VStack } from 'native-base';

type NewsDetailScreenCompProps = {
  newsDetail: INews | undefined;
  onNewsEditPress: () => void;
};

const NewsDetailScreenComp: React.FC<NewsDetailScreenCompProps> = ({
  onNewsEditPress,
  newsDetail,
}) => {
  return (
    <ScrollView>
      <VStack space="2">
        <NewsItem
          title={newsDetail?.title!}
          imagePath={newsDetail?.imagePath!}
          description={newsDetail?.description!}
        />
        <Button onPress={onNewsEditPress} variant="link">
          Edit
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default NewsDetailScreenComp;
