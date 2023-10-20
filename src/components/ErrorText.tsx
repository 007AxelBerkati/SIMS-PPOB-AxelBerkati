import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../themes';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  error?: string;
};

const ErrorText = ({error}: Props) => {
  return <Text style={styles.errorText}>{error}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.danger,
    fontSize: moderateScale(12),
  },
});
