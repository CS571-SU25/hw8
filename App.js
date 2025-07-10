import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BadgerNews from './src/components/BadgerNews';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <BadgerNews />
    </SafeAreaProvider>
  );
}