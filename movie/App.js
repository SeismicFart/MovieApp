import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'dotenv/config'

export default function App() {
  return (
    <View>
      <Text>API Key: {process.env.API_KEY}</Text>
    </View>
    <AppNavigation />
  );
}

