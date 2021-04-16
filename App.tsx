import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-material-ui-x'

export default function App() {
  return (
    <View style={styles.container}>
      <Button raised primary text="text1" />
      <Button raised accent text="Accent" />
      <Text>Open up App.tsx to start working on your app!</Text>
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
});
