import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from "./src/Config/Route/HomeScreen"
import Splashscreen from "./src/Screens/SplashScreen"
const App =  () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Route/>    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
