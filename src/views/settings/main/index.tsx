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

const SettingsMain: React.SFC = (): JSX.Element => (
  <View style={styles.hello}>
    <Text>This screen will be the main screen for settings.</Text>
  </View>
);

export default SettingsMain;
