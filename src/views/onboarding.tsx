import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from '../modules/onboarding/swiper';
import { colors, padding } from '../styles/base';

export default class Onboarding extends Component {
  render() {
    return (
      <Swiper>
        {/* Welcome screen */}
        <View style={[styles.slide, { backgroundColor: '#000' }]}>
          <Text
            style={{
              color: colors.white,
              fontSize: 12,
              paddingBottom: padding.sm,
              letterSpacing: 4,
            }}
          >
            Welcome to
          </Text>
          <Image
            style={{ width: 249, height: 95.77 }}
            source={require('../../assets/logo_plain_white.png')}
          />
          <Text style={{ color: colors.ice, paddingTop: padding.md, paddingBottom: padding.xs }}>
            Minimalistic Journaling
          </Text>
          <Text style={{ color: colors.white, textAlign: 'center' }}>
            Establish a habit of active reflection{'\n'}by capturing only one thought per day.
          </Text>
        </View>
        {/* Rules screen */}
        <View style={[styles.slide, { backgroundColor: '#000' }]}>
          <Text style={styles.header}>Small effort + consistency</Text>
          <Text style={styles.text}>Explanatory text</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});
