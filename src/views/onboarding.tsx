import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import Swiper from '../modules/onboarding/swiper';

export default class Onboarding extends Component {
  render() {
    return (
      <Swiper>
        {/* Welcome screen */}
        <View style={[styles.slide, { backgroundColor: '#000' }]}>
          <Text style={styles.header}>Welcome to thght</Text>
          <Text style={styles.text}>Hi there, good to see you.</Text>
        </View>
        {/* Rules screen */}
        <View style={[styles.slide, { backgroundColor: '#000' }]}>
          <Text style={styles.header}>Small effort + consistency</Text>
          <Text style={styles.text}>Explanatory text</Text>
        </View>
        {/* Register screen */}
        <View style={[styles.slide, { backgroundColor: '#000' }]}>
          <Text style={styles.header}>Register</Text>
          <Text style={styles.text}>Do some stuff to register.</Text>
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
