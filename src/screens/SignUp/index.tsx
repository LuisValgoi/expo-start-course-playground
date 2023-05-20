import React from 'react';
import { Alert } from 'react-native';
import { Box } from 'native-base';
import SignUpScreenComp, {
  type SignUpScreenCompFormValues,
} from 'src/components/_screens_/SignUp';
import { type ScreenProps } from 'src/interfaces/interfaces';
import { useSignUp } from 'src/screens/SignUp/useSignUp';

type SignUpProps = ScreenProps<'SignUp'>;

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { loading, onSubmit } = useSignUp();

  const handleSubmit = (form: SignUpScreenCompFormValues) => {
    onSubmit(form)
      .then(() => {
        navigation.navigate('News', {});
      })
      .catch((error) => {
        Alert.alert(error.message, undefined, [{ text: 'Try Again' }]);
      });
  };

  const handleSignInClick = () => {
    navigation.navigate('SignIn', {});
  };

  return (
    <Box bg="gray.100" pt="1/3" pl="2" pr="2" height="full">
      <SignUpScreenComp
        isLoading={loading}
        onSignInClick={handleSignInClick}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default SignUp;
