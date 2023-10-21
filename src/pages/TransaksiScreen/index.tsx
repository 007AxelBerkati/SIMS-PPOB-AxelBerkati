import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import CardSaldo2 from '../../components/CardSaldo2';
import {useAppSelector} from '../../redux/store';
import Gap from '../../components/Gap';
import {fontSize} from '../../themes';

type Props = {};

const TransaksiScreen = (props: Props) => {
  const {dataBalance} = useAppSelector(state => state.transaction);

  return (
    <View style={styles.container}>
      <Gap height={moderateScale(20)} />
      <CardSaldo2 balance={dataBalance} />
      <Text style={styles.titleTransaksi}>Transaksi</Text>
    </View>
  );
};

export default TransaksiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(25),
  },
  titleTransaksi: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: moderateScale(50),
  },
});
