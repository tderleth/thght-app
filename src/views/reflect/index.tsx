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

const Reflect = () => (
  <View style={styles.hello}>
    <Text>This screen will be used to show you your captured thoughts.</Text>
  </View>
);

export default Reflect;
