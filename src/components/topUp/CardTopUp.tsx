import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  nominal: number;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

const CardTopUp = ({nominal, setFieldValue}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setFieldValue('top_up_amount', nominal);
      }}>
      <Text style={styles.title}>Rp{nominal.toLocaleString('id-ID')}</Text>
    </TouchableOpacity>
  );
};

export default CardTopUp;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.border.primary,
    borderRadius: moderateScale(8),
    width: moderateScale(100),
    alignItems: 'center',
  },

  title: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: COLORS.text.primary,
    paddingVertical: moderateScale(15),
  },
});
