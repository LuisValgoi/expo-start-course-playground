import { Box, Text, VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import VideoPlayer from 'src/components/VideoPlayer/VideoPlayer';

const blockA = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla id ipsum sit amet congue. Suspendisse non scelerisque velit, id consectetur justo. Nulla sed libero consequat, dignissim velit non, eleifend leo. Nullam a sem pulvinar, accumsan lacus in, cursus magna. Donec quis nunc porta, aliquet massa vitae, auctor nulla. Aliquam erat volutpat. Mauris in dapibus orci, id bibendum metus. Maecenas efficitur tortor a facilisis cursus. Donec quis lorem vitae eros rhoncus viverra. Donec vel lacus sapien.`;

const About: React.FC = () => {
  return (
    <Box bg="gray.100" height="full" p="6" pl="2" pr="2" mt="1/4" mb="96">
      <ScrollView style={{ height: 1500 }}>
        <VStack bg="white" space="6" p="6" borderRadius="md">
          <VideoPlayer width="full" borderRadius="md" />
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            We are Different
          </Text>
          <Text>{blockA}</Text>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default About;
