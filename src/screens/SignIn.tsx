import React, { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { Box } from 'native-base';
import SignInScreenComp, {
  SignInScreenCompFormValues,
} from 'src/components/_screens_/SignIn/SignIn';
import { useAuth } from 'src/hooks/useAuth';
import { ScreenProps } from 'src/interfaces/interfaces';

type SignInProps = ScreenProps<'SignIn'>;

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const { loggedUser, setLoggedUser, get } = useAuth();

  const handleSignUpClick = useCallback(() => {
    navigation.navigate('SignUp', {});
  }, [navigation]);

  const handleSubmit = async (form: SignInScreenCompFormValues) => {
    const data = await get.getUser(form.email);
    const correctPassword =
      data?.email === form.email && data.password === data.password;

    if (correctPassword) {
      setLoggedUser(data);
    } else {
      setLoggedUser(undefined);
      Alert.alert('Wrong Credentials', undefined, [{ text: 'Try Again' }]);
    }
  };

  useEffect(() => {
    if (loggedUser != null) {
      navigation.navigate('Home', {});
    }
  }, [loggedUser]);

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
