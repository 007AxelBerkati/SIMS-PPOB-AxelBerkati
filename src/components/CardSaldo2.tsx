import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {IMGBackgroundSaldo} from '../assets';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, fontSize} from '../themes';
import {IconButton} from 'react-native-paper';

type Props = {
  balance: number;
};

const CardSaldo2 = ({balance}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMGBackgroundSaldo}
        style={styles.imageBackground}>
        <View style={{marginLeft: moderateScale(30)}}>
          <Text style={styles.titleSaldo}>Saldo anda</Text>
          <Text style={styles.saldo}>Rp {balance.toLocaleString('id-ID')}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardSaldo2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageBackground: {
    width: '100%',
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
  },

  titleSaldo: {
    fontSize: fontSize.xxlarge,
    fontWeight: '400',
    color: COLORS.text.secondary,
    marginBottom: moderateScale(10),
  },

  saldo: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: COLORS.text.secondary,
    marginBottom: moderateScale(10),
  },

  lihatSaldo: {
    fontSize: fontSize.medium,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
});
