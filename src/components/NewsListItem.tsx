import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.listings}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.thumbnail} source={{ uri }} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({
  listings: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: '#f3f3f3',
    gap: 10,
  },
  title: {
    paddingBottom: 10,
    fontSize: 18,
    fontFamily: 'Raleway_700Bold',
  },
  thumbnail: {
    height: 100,
    width: '98%',
    paddingBottom: 10,
  },
  description: {
    fontFamily: 'Raleway_400Regular',
    fontStyle: 'italic',
  },
});
