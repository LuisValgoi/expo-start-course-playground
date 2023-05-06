import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ComponentProps } from '../interfaces/interfaces';

const GoBackButton: React.FC<TouchableOpacityProps> = ({ style }) => {
  const navigation = useNavigation<ComponentProps<'Home'>>();

  return (
    <TouchableOpacity
      style={Object.assign({}, styles.button, style)}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.buttonText}>Go Back</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 100,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Raleway_400Regular',
  },
});
