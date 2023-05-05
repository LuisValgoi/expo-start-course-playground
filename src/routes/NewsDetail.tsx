import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { Text, TouchableOpacity, TouchableOpacityBase } from 'react-native';

// interface
import { PageProps } from '../interfaces/interfaces';

// style
import styles from '../styles/newsDetail';
import useNewsDetail from '../hooks/useNewsDetail';
import { ScrollView } from 'react-native-gesture-handler';

type NewsDetailProp = PageProps<'NewsDetail'>;

const NewsDetail: React.FC<NewsDetailProp> = ({ navigation, route }) => {
  const { loading, post } = useNewsDetail(route.params.url);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator />;
    }

    return (
      <ScrollView>
        <Text style={styles.title}>{post?.title}</Text>
        <Image style={styles.storyImg} source={{ uri: post?.urlToImage }} />
        <Text style={styles.description}>{post?.description}</Text>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      {renderContent()}
    </View>
  );
};

export default NewsDetail;
