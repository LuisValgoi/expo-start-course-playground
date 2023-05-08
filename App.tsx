import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'src/routes/Home';
import NewsDetail from 'src/routes/NewsDetail';
import Bootstrap from 'src/providers/Bootstrap';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { RootStackParamList } from 'src/interfaces/interfaces';
import Theme from 'src/providers/Theme';
import About from 'src/routes/About';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Bootstrap>
      {({ onLayoutRootView }) => (
        <Theme>
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
              <Stack.Screen
                name="About"
                component={About}
                options={{
                  header: () => <Header display="About" />,
                }}
              />
            </Stack.Navigator>
            <Footer />
          </NavigationContainer>
        </Theme>
      )}
    </Bootstrap>
  );
}
