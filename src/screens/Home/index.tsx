import React from 'react';
import { Box, Spinner } from 'native-base';

import HomeScreenComp from 'src/components/_screens_/Home/Home';
import { NewsListItemAPIProps, ScreenProps } from 'src/interfaces/interfaces';
import useHome from 'src/screens/Home/useHome';

type HomeProps = ScreenProps<'Home'>;

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { loading, news } = useHome();

  const handleItemPress = (item: NewsListItemAPIProps) => {
    navigation.navigate('NewsDetail', { url: item.url });
  };

  return (
    <Box bg="gray.100" pt="6" pl="2" pr="2" mt="1/4">
      {loading ? (
        <Spinner color="red" accessibilityLabel="Loading..." />
      ) : (
        <HomeScreenComp onItemPress={handleItemPress} news={news} />
      )}
    </Box>
  );
};

export default Home;
