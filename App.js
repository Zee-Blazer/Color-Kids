import 'react-native-gesture-handler';

// Navigation Container
import { Navigation } from './src/Infrastructure/Navigation';

// The main Font
import {
  useFonts,
  Merienda_700Regular
} from "@expo-google-fonts/merienda";

import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [meriendaLoaded] = useFonts({
    Merienda_700Regular,
  })

  if(!meriendaLoaded){
    return null;
  }

  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
