import React from 'react';
import { Alert } from 'react-native';
import { Box } from 'native-base';
import SignInScreenComp, {
  SignInScreenCompFormValues,
} from 'src/components/_screens_/SignIn/SignIn';
import { ScreenProps } from 'src/interfaces/interfaces';
import { useSignIn } from 'src/screens/SignIn/useSignIn';

type SignInProps = ScreenProps<'SignIn'>;

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const { onSubmit } = useSignIn();

  const handleSignUpClick = () => {
    navigation.navigate('SignUp', {});
  };

  const handleSubmit = async (form: SignInScreenCompFormValues) => {
    await onSubmit(form)
      .then(() => {
        navigation.navigate('Home', {});
      })
      .catch(() => {
        Alert.alert('Wrong Credentials', undefined, [{ text: 'Try Again' }]);
      });
  };

  return (
    <Box bg="gray.100" p="6" mt="1/4" height="full">
      <SignInScreenComp
        onSignUpClick={handleSignUpClick}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default SignIn;
