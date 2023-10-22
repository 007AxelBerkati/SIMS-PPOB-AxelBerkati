import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, fontSize} from '../../themes';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  serviceTitle: string;
  created_on: string;
  transaction_type: string;
  total_amount: number;
};

const CardTransaksi = ({
  serviceTitle,
  created_on,
  transaction_type,
  total_amount,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start'}}>
        {transaction_type === 'TOPUP' ? (
          <Text style={styles.amountAdd}>
            + RP.{total_amount.toLocaleString('id-ID')}
          </Text>
        ) : (
          <Text style={styles.amoundMinus}>
            - RP.{total_amount.toLocaleString('id-ID')}
          </Text>
        )}
        <Text style={styles.createdOn}>
          {new Date(created_on).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          {new Date(created_on).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
          })}{' '}
          WIB
        </Text>
      </View>
      <Text style={styles.serviceTitle}>{serviceTitle}</Text>
    </View>
  );
};

export default CardTransaksi;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: COLORS.border.primary,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    alignItems: 'center',
  },

  amountAdd: {
    fontSize: fontSize.xxlarge,
    fontWeight: 'bold',
    color: COLORS.success,
    marginLeft: moderateScale(10),
  },

  amoundMinus: {
    fontSize: fontSize.xxlarge,
    fontWeight: 'bold',
    color: COLORS.button.primary.backgroundColor,
    marginLeft: moderateScale(10),
  },

  createdOn: {
    fontSize: moderateScale(12),
    color: COLORS.text.subTitle,
    marginLeft: moderateScale(10),
    paddingTop: moderateScale(5),
  },

  serviceTitle: {
    fontSize: fontSize.small,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginRight: moderateScale(10),
  },
});
