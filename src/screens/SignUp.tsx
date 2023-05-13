import { Box } from 'native-base';
import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import SignUpScreenComp, {
  SignUpScreenCompFormValues,
} from 'src/components/_screens_/SignUp/SignUp';
import { useSaveUser } from 'src/hooks/useAuth';

import { ScreenProps } from 'src/interfaces/interfaces';

type SignUpProps = ScreenProps<'SignUp'>;

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { handleSave, success, isLoading, error } = useSaveUser();

  const handleSubmit = (form: SignUpScreenCompFormValues) => {
    handleSave(form);
  };

  const handleSignInClick = useCallback(() => {
    navigation.navigate('SignIn', {});
  }, [navigation]);

  if (error) {
    Alert.alert('Error', 'Wrong SignUp');
  }

  if (success) {
    Alert.alert('Successfully Registered!', undefined, [
      { text: 'Ok!', onPress: () => navigation.navigate('SignIn', {}) },
    ]);
  }

  return (
    <Box bg="gray.100" p="6" mt="1/4" height="full">
      <SignUpScreenComp
        isLoading={isLoading}
        onSignInClick={handleSignInClick}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default SignUp;
