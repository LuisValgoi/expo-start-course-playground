import { Box, Image, Pressable, Text, VStack } from 'native-base';
import React from 'react';

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
    <Pressable onPress={onPress}>
      <Box bg="white" borderRadius="md" p="4" mb="2">
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
    </Pressable>
  );
};

export default NewsListItem;
