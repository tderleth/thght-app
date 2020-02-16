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

const CaptureThoughtDone: React.SFC = (): JSX.Element => (
  <View style={styles.hello}>
    <Text>You will see this screen, if you have already captured a thought on that given day.</Text>
  </View>
);

export default CaptureThoughtDone;
