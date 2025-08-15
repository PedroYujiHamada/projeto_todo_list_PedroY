import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import logo from './assets/todo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <image source={logo} style={styles.logo}/>
        </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
  });
