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

const Registration = () => (
  <View style={styles.hello}>
    <Text>This will be the login screen.</Text>
  </View>
);

export default Login;
