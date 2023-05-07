import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import logo from '../../assets/logo.png';
import GoBackButton from 'src/components/GoBackButton';
import { HStack, Image, Text } from 'native-base';

export type HeaderProps = {
  display: string;
};

const Header: React.FC<HeaderProps> = ({ display }) => {
  return (
    <>
      <SafeAreaProvider>
        <InternalHeader display={display} />
      </SafeAreaProvider>
    </>
  );
};

export default Header;

const InternalHeader: React.FC<HeaderProps> = ({ display }) => {
  const styles = useStyles();

  return (
    <HStack style={styles.header} backgroundColor="red.500" alignItems="center">
      <HStack
        flex={10}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <HStack
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          position="absolute"
          left={2}
        >
          <GoBackButton />
        </HStack>
        <Image source={logo} style={styles.logo} alt="Logo" />
        <Text color="white">{display}</Text>
      </HStack>
    </HStack>
  );
};

function useStyles() {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    header: {
      height: Platform.OS === 'android' ? 70 : 110,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    logo: {
      width: 35,
      height: 35,
    },
  });
}
