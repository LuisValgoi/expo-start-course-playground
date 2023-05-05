import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// routes
import Home from './src/routes/Home';
import NewsDetail from './src/routes/NewsDetail';

// comps
import Bootstrap from './src/components/Bootstrap';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

// interfaces
import { RootStackParamList } from './src/interfaces/interfaces';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Bootstrap>
      {({ onLayoutRootView }) => (
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                header: () => <Header display="Home" />,
              }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              options={{
                header: () => <Header display="News" />,
              }}
            />
          </Stack.Navigator>
          <Footer />
        </NavigationContainer>
      )}
    </Bootstrap>
  );
}
