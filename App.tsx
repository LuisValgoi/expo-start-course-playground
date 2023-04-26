import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// routes
import Home from './src/routes/Home';

// comps
import Bootstrap from './src/components/Bootstrap';
import Header from './src/components/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Bootstrap>
      {({ onLayoutRootView }) => (
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator initialRouteName="globomantics">
            <Stack.Screen
              name="globomantics"
              component={Home}
              options={{
                header: () => <Header display="GloboMantics" />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Bootstrap>
  );
}
