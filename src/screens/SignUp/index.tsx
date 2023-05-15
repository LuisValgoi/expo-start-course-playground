import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { Box } from 'native-base';
import SignUpScreenComp, {
  type SignUpScreenCompFormValues,
} from 'src/components/_screens_/SignUp/SignUp';
import { type ScreenProps } from 'src/interfaces/interfaces';
import { useSignUp } from 'src/screens/SignUp/useSignUp';

type SignUpProps = ScreenProps<'SignUp'>;

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { onSubmit } = useSignUp();

  const handleSubmit = (form: SignUpScreenCompFormValues) => {
    onSubmit(form)
      .then(() => {
        Alert.alert('Successfully Registered!', undefined, [
          {
            text: 'Ok!',
            onPress: () => {
              navigation.navigate('SignIn', {});
            },
          },
        ]);
      })
      .catch(() => {
        Alert.alert('Error during registration!');
      });
  };

  const handleSignInClick = () => {
    navigation.navigate('SignIn', {});
  };

  return (
    <Box bg="gray.100" p="6" mt="1/4" height="full">
      <SignUpScreenComp
        onSignInClick={handleSignInClick}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default SignUp;
