import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// assets
import logo from '../../assets/logo.png';
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Platform } from 'react-native';

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
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <View
      style={{
        ...styles.header,
      }}
    >
      <Image source={logo} style={styles.logo} />
      <View>
        <Text style={styles.text}>{display}</Text>
      </View>
    </View>
  );
};

const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    header: {
      width: '100%',
      height: Platform.OS === 'android' ? 70 : 110,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor:
        'linear-gradient(180deg, rgba(252,70,73,1) 74%, rgba(219,131,131,1) 82%)',
    },
    logo: {
      width: 35,
      height: 35,
    },
    text: {
      fontFamily: 'Raleway_400Regular',
      color: 'white',
    },
  });
