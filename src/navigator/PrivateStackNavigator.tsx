import * as React from 'react';
import Header from 'src/components/_application_/Header/Header';
import { StackNavigatorProps } from 'src/interfaces/interfaces';

import About from 'src/screens/About';
import Contact from 'src/screens/Contact';
import Home from 'src/screens/Home';
import NewsDetail from 'src/screens/NewsDetail';

const PrivateStackNavigator: React.FC<StackNavigatorProps> = ({ Stack }) => {
  return (
    <>
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
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          header: () => <Header display="Contact" />,
        }}
      />
    </>
  );
};

export default PrivateStackNavigator;
