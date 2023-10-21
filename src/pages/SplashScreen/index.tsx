import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICLogo} from '../../assets';
import {COLORS, SIZES} from '../../themes';
import {moderateScale} from 'react-native-size-matters';
import {getData} from '../../plugins';
import {setToken, store} from '../../redux';
import {useAppDispatch} from '../../redux/store';

type Props = {
  navigation: any;
};

const SplashScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          dispatch(setToken(res));
          navigation.replace('MainApp');
        } else {
          navigation.replace('LoginScreen');
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={ICLogo} style={styles.Logo} />
      <Text style={styles.title}>SIMS PPOB</Text>
      <Text style={styles.desc}>Axel Berkati</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: SIZES.width * 0.35,
    height: SIZES.width * 0.35,
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
    color: COLORS.text.primary,
  },

  desc: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginTop: moderateScale(10),
    color: COLORS.text.subTitle,
  },
});
