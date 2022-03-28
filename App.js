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
const App =  () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Route/>    
  );
};


export default App;
