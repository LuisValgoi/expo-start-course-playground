import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from 'src/interfaces/interfaces';
import PrivateStackNavigator from './PrivateStackNavigator';
import PublicStackNavigator from './PublicStackNavigator';
import Footer from 'src/components/_application_/Footer/Footer';
import { useAuth } from 'src/hooks/useAuth';

const Stack = createStackNavigator<RootStackParamList>();

type StackNavigatorProps = {
  onLayoutRootView: () => Promise<void>;
};

const StackNavigator: React.FC<StackNavigatorProps> = ({
  onLayoutRootView,
}) => {
  const { loggedUser } = useAuth();

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName={loggedUser ? 'News' : 'SignIn'}>
        {PublicStackNavigator({ Stack })}
        {PrivateStackNavigator({ Stack })}
      </Stack.Navigator>
      {loggedUser && <Footer />}
    </NavigationContainer>
  );
};

export default StackNavigator;
