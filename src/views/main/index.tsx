import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    color: 'white',
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
});

const Main = () => (
  <View style={styles.hello}>
    <Text>thght</Text>
  </View>
);

export default Main;
