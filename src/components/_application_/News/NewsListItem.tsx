import { Box, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import RemoteImage from '../RemoteImage';

type NewsListItemProps = {
  onPress: () => void;
  title: string;
  imagePath: string;
  description: string;
};

const NewsListItem: React.FC<NewsListItemProps> = ({
  onPress,
  title,
  imagePath,
  description,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Box bg="white" borderRadius="md" p="4" mb="2">
        <VStack space="2">
          <Text fontFamily="body" fontStyle="bold" fontWeight="400">
            {title}
          </Text>
          <RemoteImage
            imagePath={imagePath}
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
