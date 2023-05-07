import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { ComponentProps } from 'src/interfaces/interfaces';

const Footer: React.FC = () => {
  const navigation = useNavigation<ComponentProps<'Home'>>();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home', {})}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Catalog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor:
      'linear-gradient(180deg, rgba(252,70,73,1) 74%, rgba(219,131,131,1) 82%)',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Raleway_400Regular',
    // padding: 5,
  },
});
