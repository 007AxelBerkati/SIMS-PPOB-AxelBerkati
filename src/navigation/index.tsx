import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {COLORS} from '../themes';

import Router from './Stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background.primary,
  },
};

function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  );
}

export default Navigation;
