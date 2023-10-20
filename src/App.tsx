/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Navigation from './navigation';
import {COLORS} from './themes';

function MainApp(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.background.primary}
      />
      <Navigation />
    </>
  );
}

function App(): JSX.Element {
  return (
    <>
      <MainApp />
    </>
  );
}

export default App;
