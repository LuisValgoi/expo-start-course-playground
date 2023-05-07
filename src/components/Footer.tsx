import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ComponentProps } from 'src/interfaces/interfaces';
import { Button, HStack } from 'native-base';

import { useNavigationState } from '@react-navigation/native';
import { RootStackList } from 'src/interfaces/interfaces';

const Footer: React.FC = () => {
  const navigation = useNavigation<ComponentProps<'Home'>>();
  const state = useNavigationState((state) => state);
  const routeName = state?.routeNames[state?.index];

  const getButtonVariant = (url: RootStackList) =>
    url === routeName ? 'subtle' : 'solid';

  return (
    <HStack
      w="full"
      space="2"
      p="4"
      justifyItems="center"
      alignItems="center"
      justifyContent="center"
      bgColor="red.500"
    >
      <Button
        variant={getButtonVariant('Home')}
        onPress={() => navigation.navigate('Home', {})}
      >
        Home
      </Button>
      <Button variant={getButtonVariant('About')}>About</Button>
      <Button variant={getButtonVariant('Quote')}>Quote</Button>
      <Button variant={getButtonVariant('Catalog')}>Catalog</Button>
    </HStack>
  );
};

export default Footer;
