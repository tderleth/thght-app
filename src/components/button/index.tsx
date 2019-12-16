import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Props {
  text: string;
  onPress: () => void;
}

interface State {}

export default class Button extends Component<Props, State> {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50, // Rounded border
    borderWidth: 2, // 2 point border width
    borderColor: '#FFFFFF', // White colored border
    paddingHorizontal: 50, // Horizontal padding
    paddingVertical: 10, // Vertical padding
  },
  // Button text
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
