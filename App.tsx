import 'react-native-gesture-handler';

import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';

import { Background } from './src/components/Background';

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
