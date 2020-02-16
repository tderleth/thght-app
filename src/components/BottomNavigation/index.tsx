import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-native';
import { Route, routes } from '../../constants/routes';
import { colors } from '../../styles/base';

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.grayLight,
  },
  navigationItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  link: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: colors.ice,
  },
  nonActive: {
    color: colors.white,
  },
});

const BottomNavigation: React.SFC = () => {
  return (
    <View style={styles.navigation}>
      {routes
        .filter((route: Route) => route.type === 'bottom')
        .map((route: Route) => (
          <View key={route.link} style={styles.navigationItem}>
            <Link to={route.link} style={styles.link}>
              <View>
                <Text
                  style={useLocation().pathname === route.link ? styles.active : styles.nonActive}
                >
                  {route.name}
                </Text>
              </View>
            </Link>
          </View>
        ))}
    </View>
  );
};

export default BottomNavigation;
