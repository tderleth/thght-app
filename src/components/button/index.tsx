import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/base';

export interface IProps {
  text: string;
  onPress: () => void;
}

export default class Button extends Component<IProps> {
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
    backgroundColor: colors.white,
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 16,
  },
});
