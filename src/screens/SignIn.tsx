import { Box } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import SignInScreenComp, {
  SignInScreenCompFormValues,
} from 'src/components/_screens_/SignIn/SignIn';
import { useGetUser } from 'src/hooks/useAuth';

import { ScreenProps } from 'src/interfaces/interfaces';
import { useAuthProvider } from 'src/providers/Auth';

type SignInProps = ScreenProps<'SignIn'>;

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuthProvider();
  const { getUser } = useGetUser();

  const handleSubmit = async (form: SignInScreenCompFormValues) => {
    const data = await getUser(form.email);
    if (data?.email === form.email && data.password === data.password) {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Wrong Credentials', undefined, [
        {
          text: 'Try Again',
          onPress: () => {
            setIsLoggedIn(false);
          },
        },
      ]);
    }
  };

  const handleSignUpClick = useCallback(() => {
    navigation.navigate('SignUp', {});
  }, [navigation]);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home', {});
    }
  }, [isLoggedIn]);

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
