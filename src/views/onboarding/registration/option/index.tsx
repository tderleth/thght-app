import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppleSignIn from '../../../../components/apple-sign-in';

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    color: 'white',
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
});

const RegistrationOption = () => (
  <View style={styles.hello}>
    <Text>This will be the screen where you chose your prefered way to register.</Text>
    <AppleSignIn />
  </View>
);

export default RegistrationOption;
