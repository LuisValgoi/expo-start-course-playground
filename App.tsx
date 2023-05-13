import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from 'src/interfaces/interfaces';

import Bootstrap from 'src/providers/Bootstrap';
import Theme from 'src/providers/Theme';
import StackNavigator from 'src/navigator/StackNavigator';
import AuthProvider from 'src/providers/Auth';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Theme>
      <Bootstrap>
        {({ onLayoutRootView }) => (
          <AuthProvider>
            <StackNavigator onLayoutRootView={onLayoutRootView} />
          </AuthProvider>
        )}
      </Bootstrap>
    </Theme>
  );
}
