import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type NewsItemProps = {
  title: string;
  uri: string;
  description: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, uri, description }) => {
  return (
    <ScrollView>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.thumbnail} source={{ uri }} />
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    fontSize: 18,
    fontFamily: 'Raleway_700Bold',
  },
  thumbnail: {
    height: 300,
    width: '100%',
  },
  description: {
    paddingTop: 10,
    fontFamily: 'Raleway_400Regular',
    fontStyle: 'italic',
  },
});
