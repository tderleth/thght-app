import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    color: 'white',
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
});

const CaptureThought = () => (
  <View style={styles.hello}>
    <Text>This will be the registration screen.</Text>
  </View>
);

export default CaptureThought;
