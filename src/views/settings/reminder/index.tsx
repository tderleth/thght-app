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

const SettingsReminder: React.SFC = (): JSX.Element => (
  <View style={styles.hello}>
    <Text>This screen will be a settings screen to change your reminder.</Text>
  </View>
);

export default SettingsReminder;
