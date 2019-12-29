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

const RegistrationEmail = () => (
  <View style={styles.hello}>
    <Text>This will be the screen for the email registration option.</Text>
  </View>
);

export default RegistrationEmail;
