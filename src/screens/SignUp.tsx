import React, { useCallback } from 'react'
import { Alert } from 'react-native'
import { Box } from 'native-base'
import SignUpScreenComp, {
  type SignUpScreenCompFormValues
} from 'src/components/_screens_/SignUp/SignUp'
import { useAuth } from 'src/hooks/useAuth'
import { type ScreenProps } from 'src/interfaces/interfaces'

type SignUpProps = ScreenProps<'SignUp'>

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { save } = useAuth()

  const handleSubmit = (form: SignUpScreenCompFormValues) => {
    save.saveUser(form)
  }

  const handleSignInClick = useCallback(() => {
    navigation.navigate('SignIn', {})
  }, [navigation])

  if (save.error) {
    Alert.alert('Error', 'Wrong SignUp')
  }

  if (save.success) {
    Alert.alert('Successfully Registered!', undefined, [
      { text: 'Ok!', onPress: () => { navigation.navigate('SignIn', {}) } }
    ])
  }

  return (
    <Box bg="gray.100" p="6" mt="1/4" height="full">
      <SignUpScreenComp
        isLoading={save.isLoading}
        onSignInClick={handleSignInClick}
        onSubmit={handleSubmit}
      />
    </Box>
  )
}

export default SignUp
