import { Box, Image, Text, VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import imageA from '../../assets/about-1.jpg';
import imageB from '../../assets/about-2.jpg';

const blockA = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla id ipsum sit amet congue. Suspendisse non scelerisque velit, id consectetur justo. Nulla sed libero consequat, dignissim velit non, eleifend leo. Nullam a sem pulvinar, accumsan lacus in, cursus magna. Donec quis nunc porta, aliquet massa vitae, auctor nulla. Aliquam erat volutpat. Mauris in dapibus orci, id bibendum metus. Maecenas efficitur tortor a facilisis cursus. Donec quis lorem vitae eros rhoncus viverra. Donec vel lacus sapien.`;
const blockB = `Cras rhoncus sem a hendrerit mattis. Quisque vehicula tincidunt auctor. Vestibulum lorem ex, tempus ut quam tempor, dignissim imperdiet urna. Nullam tristique, arcu ut consectetur tincidunt, urna tellus rutrum enim, quis eleifend mi nisl id lorem. Vivamus pellentesque orci a dolor egestas commodo. Aenean iaculis eros ipsum, a mollis leo rhoncus vitae. Sed et nunc sed nunc malesuada gravida.`;

const About: React.FC = () => {
  return (
    <Box bg="gray.100" height="full" p="6" pl="2" pr="2" mt="1/4" mb="96">
      <ScrollView style={{ height: 1500 }}>
        <VStack bg="white" space="6" p="6" borderRadius="md">
          <Image
            width="full"
            h="40"
            borderRadius="md"
            source={imageA}
            alt="Image A"
          />
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            We are Different
          </Text>
          <Text>{blockA}</Text>
          <Image
            width="full"
            h="40"
            borderRadius="md"
            source={imageB}
            alt="Image B"
          />
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            Leaders in our Field
          </Text>
          <Text>{blockB}</Text>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default About;
