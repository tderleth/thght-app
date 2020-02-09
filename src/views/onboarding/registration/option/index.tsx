import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppleSignIn from '../../../../components/apple-sign-in';
import { colors, padding } from '../../../../styles/base';
import { Z_FIXED } from 'zlib';

const styles = StyleSheet.create({
  hello: {
    alignItems: 'center',
    color: 'white',
    flex: 1,
    fontSize: 30,
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  h3: {
    color: colors.white,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: padding.sm,
  },
  terms: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.gray_lightest,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: padding.xl,
  },
});

const RegistrationOption = () => (
  <View style={styles.hello}>
    <Image
      style={styles.backgroundImage}
      source={require('../../../../../assets/gradient_ice.png')}
    ></Image>
    <Text style={styles.h3}>Sign up to track your progress and secure your thoughts</Text>
    <AppleSignIn />
    <Text style={styles.terms}>
      By signing up, you agree to thght’s{'\n'}Terms and Service and Privacy Policy.
    </Text>
  </View>
);

export default RegistrationOption;
