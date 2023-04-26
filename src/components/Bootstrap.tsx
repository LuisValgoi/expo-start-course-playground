import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

const Bootstrap = ({
  children,
}: {
  children(options: { onLayoutRootView: () => Promise<void> }): ReactNode;
}) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Raleway_400Regular,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <>{children({ onLayoutRootView })}</>;
};

export default Bootstrap;
