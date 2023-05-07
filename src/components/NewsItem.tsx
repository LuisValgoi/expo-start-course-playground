import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';

type NewsItemProps = {
  title: string;
  uri: string;
  description: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, uri, description }) => {
  return (
    <Box bg="white" borderRadius="md" p="4" height="full">
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
        <Image
          source={{ uri }}
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
