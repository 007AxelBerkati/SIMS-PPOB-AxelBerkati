import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';
import {moderateScale} from 'react-native-size-matters';

type Props = {};

const CardTransaksi = ({serviceTitle}: Props) => {
  return (
    <View style={styles.container}>
      <View></View>
      <Text>{}</Text>
    </View>
  );
};

export default CardTransaksi;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: COLORS.border.primary,
    borderWidth: 1,
    borderRadius: moderateScale(8),
  },
});
