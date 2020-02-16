import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';

export interface LayoutProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomNav: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'black',
    flex: 9,
    justifyContent: 'center',
  },
});

const BottomNavigationLayout: React.SFC = ({ children }: LayoutProps): JSX.Element => (
  <View style={styles.layout}>
    <View style={styles.content}>{children}</View>
    <View style={styles.bottomNav}>
      <BottomNavigation />
    </View>
  </View>
);

export default BottomNavigationLayout;
