/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Navigation from './navigation';
import {COLORS, SIZES} from './themes';
import {Provider} from 'react-redux';
import {store} from './redux';
import FlashMessage from 'react-native-flash-message';
import {moderateScale} from 'react-native-size-matters';

function MainApp(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={COLORS.background.primary}
      />
      <Navigation />
      <FlashMessage
        position="top"
        style={{
          marginTop: SIZES.height * 0.05,
          width: SIZES.width * 0.9,
          borderRadius: moderateScale(8),
          alignSelf: 'center',
        }}
      />
    </>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
