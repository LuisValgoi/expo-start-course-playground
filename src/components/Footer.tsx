import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ComponentProps } from '../interfaces/interfaces';

const Footer: React.FC = () => {
  const navigation = useNavigation<ComponentProps<'Home'>>();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home', {})}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Catalog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
  },
});
