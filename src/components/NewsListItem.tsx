import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type NewsListItemProps = {
  onPress: () => void;
  title: string;
  uri: string;
  description: string;
};

const NewsListItem: React.FC<NewsListItemProps> = ({
  onPress,
  title,
  uri,
  description,
}) => {
  return (
    <TouchableWithoutFeedback
      containerStyle={{ padding: 10 }}
      onPress={onPress}
    >
      <Box bg="white" borderRadius="md" p="4">
        <VStack space="2">
          <Text fontFamily="body" fontStyle="bold" fontWeight="400">
            {title}
          </Text>
          <Image
            source={{ uri }}
            alt={title}
            borderRadius="md"
            w="full"
            height="24"
          />
          <Text fontFamily="body" fontWeight="400">
            {description}
          </Text>
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default NewsListItem;
