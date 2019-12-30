import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationOption from '../main/onboarding/registration/option';

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    color: 'white',
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
});

const Main = () => <RegistrationOption />;

export default Main;
