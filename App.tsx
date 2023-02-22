import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LabStack } from './screens/LabStack';
//--> we importeren de map "LabStack", dus de index wordt aangeropen en auto getoont (dan de andere files erin)

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <LabStack />
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
