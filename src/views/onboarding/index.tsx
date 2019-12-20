import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Swiper from '../../components/swiper';
import { colors, padding } from '../../styles/base';

export default class Onboarding extends Component {
  render() {
    return (
      <Swiper>
        {/* Welcome screen */}
        <View style={[styles.slide, { backgroundColor: colors.black, paddingBottom: padding.xxl }]}>
          <Image
            style={styles.backgroundImage}
            source={require('../../../assets/gradient_ice.png')}
          ></Image>
          <Text
            style={{
              color: colors.white,
              fontSize: 12,
              letterSpacing: 4,
              textTransform: 'uppercase',
              paddingBottom: padding.sm,
            }}
          >
            Welcome to
          </Text>
          <Image
            style={{ width: 249, height: 95.77 }}
            source={require('../../../assets/logo_plain_white.png')}
          />
          <Text
            style={{
              color: colors.ice,
              paddingTop: padding.md,
              paddingBottom: padding.xs,
              fontSize: 16,
              lineHeight: 20,
            }}
          >
            Minimalistic Journaling
          </Text>
          <Text style={styles.text}>
            Establish a habit of active reflection{'\n'}by capturing only one thought per day.
          </Text>
        </View>
        {/* Rules screen */}
        <View style={[styles.slide, { backgroundColor: colors.black, paddingBottom: padding.xl }]}>
          <Image
            style={styles.backgroundImage}
            source={require('../../../assets/gradient_ice.png')}
          ></Image>
          <Text style={styles.h1}>
            <Text style={{ textDecorationLine: 'line-through' }}>Big effort</Text>
            {'\n'}Small wins &amp; consistency
          </Text>
          <Text style={styles.text}>
            In order to laser-focus on building up your journaling muscle, there are two
            constraints.
          </Text>
          <Text style={styles.constraint}>1</Text>
          <Text style={styles.text}>Only 1 thought per day</Text>
          <Text style={styles.constraint}>2</Text>
          <Text style={styles.text}>Max. 250 characters per thought</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: colors.white,
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    marginHorizontal: 40,
    textAlign: 'center',
  },
  h1: {
    color: colors.white,
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    paddingBottom: padding.sm,
  },
  constraint: {
    color: colors.ice,
    fontSize: 20,
    fontWeight: '700',
    paddingTop: padding.md,
    paddingBottom: padding.xs,
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
});
