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
      <TouchableOpacity style={[{ width: '80%' }]} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
  },
});
