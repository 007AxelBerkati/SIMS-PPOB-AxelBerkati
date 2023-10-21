import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../themes';

type Props = {
  source: any;
  title: string;
  onPress?: () => void;
};

const CardServices = ({source, title, onPress}: Props) => {
  const renderTitle = () => {
    switch (title) {
      case 'PAJAK':
        return 'PBB';
      case 'PLN':
        return 'Listrik';
      case 'PDAM':
        return 'PDAM';
      case 'PULSA':
        return 'Pulsa';
      case 'PGN':
        return 'PGN';
      case 'MUSIK':
        return 'Musik';
      case 'TV':
        return 'TV';
      case 'PAKET_DATA':
        return 'Data';
      case 'VOUCHER_GAME':
        return 'Game';
      case 'VOUCHER_MAKANAN':
        return 'Makanan';
      case 'QURBAN':
        return 'Qurban';
      case 'ZAKAT':
        return 'Zakat';
    }
  };

  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
      <Image source={{uri: source}} style={styles.image} />
      <Text style={styles.title}>{renderTitle()}</Text>
    </TouchableOpacity>
  );
};

export default CardServices;

const styles = StyleSheet.create({
  image: {
    width: moderateScale(40),
    height: moderateScale(40),
  },

  title: {
    fontSize: moderateScale(12),
    fontWeight: 'normal',
    marginTop: moderateScale(10),
    color: COLORS.text.primary,
  },
});
