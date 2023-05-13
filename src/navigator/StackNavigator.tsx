import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from 'src/interfaces/interfaces';
import PrivateStackNavigator from './PrivateStackNavigator';
import PublicStackNavigator from './PublicStackNavigator';
import Footer from 'src/components/_application_/Footer/Footer';
import { useAuthProvider } from 'src/providers/Auth';

const Stack = createStackNavigator<RootStackParamList>();

type StackNavigatorProps = {
  onLayoutRootView: () => Promise<void>;
};

const StackNavigator: React.FC<StackNavigatorProps> = ({
  onLayoutRootView,
}) => {
  const { isLoggedIn } = useAuthProvider();

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'SignIn'}>
        {!isLoggedIn
          ? PublicStackNavigator({ Stack })
          : PrivateStackNavigator({ Stack })}
      </Stack.Navigator>
      {isLoggedIn && <Footer />}
    </NavigationContainer>
  );
};

export default StackNavigator;
