import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors, padding } from '../../../../../styles/base';

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    backgroundColor: colors.black,
    color: 'white',
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: colors.gray_lightest,
  },
  loginButton: {
    color: colors.white,
    fontSize: 17,
    textTransform: 'uppercase',
  },
  heading: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: padding.lg,
  },
});

const RegistrationOption = () => (
  <View style={styles.hello}>
    <Text style={styles.loginButton}>Log in</Text>
    <Text style={styles.heading}>Sign up to track your progress and secure your thoughts</Text>
    <Button title="Sign up with Apple" onPress={() => alert('Simple Button pressed')}></Button>
    <Button title="Sign up with Email" onPress={() => alert('Simple Button pressed')}></Button>
    <Button title="Later" onPress={() => alert('Simple Button pressed')}></Button>
    <Text style={styles.footerText}>
      By signing up, you agree to thght’s Terms and Service and Privacy Policy.
    </Text>
  </View>
);

export default RegistrationOption;
