import React from 'react';
import { Box } from 'native-base';
import NewsFormScreenComp, {
  NewsFormScreenCompFormValues,
} from 'src/components/_screens_/NewsForm';
import { Alert } from 'react-native';
import { ScreenProps } from 'src/interfaces/interfaces';

type NewsCreateProps = ScreenProps<'NewsCreate'>;

const NewsCreate: React.FC<NewsCreateProps> = ({ navigation }) => {
  const handleSubmit = (data: NewsFormScreenCompFormValues) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <Box bg="gray.100" p="6" mt="1/4" height="full">
      <NewsFormScreenComp onSubmit={handleSubmit} />
    </Box>
  );
};

export default NewsCreate;
