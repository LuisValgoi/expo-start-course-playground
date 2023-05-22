import { Box, Text, VStack } from 'native-base';
import React from 'react';
import RemoteImage from '../RemoteImage';

type NewsItemProps = {
  title: string;
  description: string;
  imagePath?: string;
};

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <Box bg="white" borderRadius="md" p="4">
      <VStack space="4">
        <Text
          fontFamily="body"
          fontStyle="bold"
          fontWeight="400"
          fontSize="xl"
          textAlign="center"
        >
          {title}
        </Text>
        <RemoteImage
          imagePath={imagePath}
          alt={title}
          borderRadius="md"
          w="full"
          height="xs"
        />
        <Text fontFamily="body" fontWeight="400">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default NewsItem;
