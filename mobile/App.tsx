import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import AppRoutes from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppRoutes />
      </SafeAreaView>
    </>
  );
};

export default App;
