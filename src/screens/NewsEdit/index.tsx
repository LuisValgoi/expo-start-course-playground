import React from 'react';
import { Box } from 'native-base';
import NewsFormScreenComp, {
  NewsFormScreenCompFormValues,
} from 'src/components/_screens_/NewsForm';
import { Alert } from 'react-native';
import { ScreenProps } from 'src/interfaces/interfaces';
import LoadingIndicator from 'src/components/_shared_/LoadingIndicator';
import useNewsEdit from 'src/screens/NewsEdit/useNewsEdit';

type NewsEditProps = ScreenProps<'NewsEdit'>;

const NewsEdit: React.FC<NewsEditProps> = ({ navigation, route }) => {
  const { loading, news, update } = useNewsEdit(route.params.id);

  const handleSubmit = (formValues: NewsFormScreenCompFormValues) => {
    update(formValues)
      .then(() => {
        navigation.navigate('NewsDetail', { id: news.id });
        Alert.alert('Successfully edited');
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  return (
    <Box bg="gray.100" pt="1/3" pl="2" pr="2" height="full">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <NewsFormScreenComp newsDetail={news} onSubmit={handleSubmit} />
      )}
    </Box>
  );
};

export default NewsEdit;