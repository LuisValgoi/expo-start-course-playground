import React from 'react';
import { Box } from 'native-base';
import NewsFormScreenComp, {
  NewsFormScreenCompFormValues,
} from 'src/components/_screens_/NewsForm';
import { Alert } from 'react-native';
import { ScreenProps } from 'src/interfaces/interfaces';
import useNewsCreate from './useNewsCreate';

type NewsCreateProps = ScreenProps<'NewsCreate'>;

const NewsCreate: React.FC<NewsCreateProps> = ({ navigation }) => {
  const { create } = useNewsCreate();

  const handleSubmit = (formValues: NewsFormScreenCompFormValues) => {
    create(formValues)
      .then(() => {
        navigation.navigate('News', {});
        Alert.alert('Successfully added');
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  return (
    <Box bg="gray.100" pt="1/3" pl="2" pr="2" height="full">
      <NewsFormScreenComp onSubmit={handleSubmit} />
    </Box>
  );
};

export default NewsCreate;
