import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

type NewsItemProps = {
  title: string;
  uri: string;
  description: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, uri, description }) => {
  return (
    <ScrollView>
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
          <Image
            source={{ uri }}
            alt={title}
            borderRadius="md"
            w="full"
            height="sm"
          />
          <Text fontFamily="body" fontWeight="400">
            {description}
          </Text>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default NewsItem;
