import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ScanPicture} from './ScanPicture';

export default function App() {
  return (
    <View style={styles.container}>
      <ScanPicture/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
