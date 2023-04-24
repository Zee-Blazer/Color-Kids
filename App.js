import 'react-native-gesture-handler';

// Navigation Container
import { Navigation } from './src/Infrastructure/Navigation';

// Theme provider
import { ThemeProvider } from 'styled-components/native';
// The theme
import { theme } from './src/Infrastructure/Themes';

// The main Font
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import { useFonts as useLobster, Lobster_400Regular } from '@expo-google-fonts/lobster'; // Lobster font

// Load bar 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const [lobsterLoaded] = useLobster({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Not Availiable</Text>
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
