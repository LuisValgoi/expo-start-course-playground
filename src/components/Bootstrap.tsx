import 'react-native-gesture-handler';
import React, { ReactNode, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import useLoadFont from '../hooks/useLoadFont';

SplashScreen.preventAutoHideAsync();

const Bootstrap = ({
  children,
}: {
  children(options: { onLayoutRootView: () => Promise<void> }): ReactNode;
}) => {
  const { appIsReady } = useLoadFont(SplashScreen.preventAutoHideAsync());

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
