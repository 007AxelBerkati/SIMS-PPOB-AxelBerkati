import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize} from '../../themes';
import {moderateScale} from 'react-native-size-matters';
import CardSaldo2 from '../../components/CardSaldo2';
import Gap from '../../components/Gap';
import {useAppSelector} from '../../redux/store';

type Props = {};

const PembayaranScreen = (props: Props) => {
  const {dataBalance} = useAppSelector(state => state.transaction);

  return (
    <View style={styles.container}>
      <Gap height={moderateScale(20)} />
      <CardSaldo2 balance={dataBalance} />
      <Text style={styles.titleTransaksi}>Transaksi</Text>
    </View>
  );
};

export default PembayaranScreen;

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
