import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ComponentProps } from 'src/interfaces/interfaces';

const GoBackButton: React.FC<TouchableOpacityProps> = ({ style }) => {
  const navigation = useNavigation<ComponentProps<'Home'>>();
  const route = useRoute();

  if (route.name === 'Home') {
    return <></>;
  }

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
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 100,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Raleway_400Regular',
    color: 'white',
  },
});
