import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ComponentProps } from 'src/interfaces/interfaces';
import { Button, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

const GoBackButton = () => {
  const navigation = useNavigation<ComponentProps<'Home'>>();
  const route = useRoute();

  if (route.name === 'Home') {
    return <></>;
  }

  return (
    <Button
      onPress={() => navigation.goBack()}
      p="2"
      alignItems="center"
      justifyItems="center"
    >
      <Icon as={FontAwesome} name="arrow-left" color="white" />
    </Button>
  );
};

export default GoBackButton;
