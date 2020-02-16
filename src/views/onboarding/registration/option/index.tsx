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

const RegistrationOption: React.SFC = (): JSX.Element => (
  <View style={styles.hello}>
    <Text>This will be the screen where you chose your prefered way to register.</Text>
  </View>
);

export default RegistrationOption;
