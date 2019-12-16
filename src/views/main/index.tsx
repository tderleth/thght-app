import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from '../onboarding';

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

const Main = () => <Onboarding />;

export default Main;
