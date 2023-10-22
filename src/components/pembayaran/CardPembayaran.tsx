import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, fontSize} from '../../themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  source: string;
  serviceTitle: string;
  tarif: number;
};

const CardPembayaran = ({source, serviceTitle, tarif}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: moderateScale(5),
        }}>
        <Image source={{uri: source}} style={styles.image} />
        <Text style={styles.serviceTitle}>{serviceTitle}</Text>
      </View>

      <View style={styles.containerTarif}>
        <MaterialCommunityIcons name="cash-100" size={moderateScale(20)} />
        <Text style={styles.tarif}>{tarif.toLocaleString('id-ID')}</Text>
      </View>
    </View>
  );
};

export default CardPembayaran;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(8),
  },
  serviceTitle: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginLeft: moderateScale(10),
  },
  containerTarif: {
    backgroundColor: COLORS.background.primary,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(5),
    marginTop: moderateScale(10),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.border.primary,
  },

  tarif: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginLeft: moderateScale(10),
  },
});
