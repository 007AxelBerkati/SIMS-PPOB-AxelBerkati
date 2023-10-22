import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Portal, Provider} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import CardSaldo2 from '../../components/CardSaldo2';
import CustomButton from '../../components/CustomButton';
import Gap from '../../components/Gap';
import {CardPembayaran} from '../../components/pembayaran';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {fontSize} from '../../themes';
import CustomDialog from '../../components/CustomDialog';
import {topUpBalance, transactionPembayaran} from '../../redux';

type Props = {
  route: any;
  navigation: any;
};

const PembayaranScreen = ({route, navigation}: Props) => {
  const {data} = route.params;

  const {dataBalance} = useAppSelector(state => state.transaction);

  const dispatch = useAppDispatch();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isDialogSuccessVisible, setIsDialogSuccessVisible] = useState(false);
  const [isDialogFailedVisible, setIsDialogFailedVisible] = useState(false);

  const {dataTransaction} = useAppSelector(state => state.transaction);

  const handleSubmit = () => {
    dispatch(transactionPembayaran({service_code: data.service_code}))
      .then(() => {
        if (dataTransaction === 'Saldo tidak mencukupi') {
          setIsDialogVisible(false);
          setIsDialogFailedVisible(true);
          return;
        }
        setIsDialogVisible(false);
        setIsDialogSuccessVisible(true);
      })
      .catch(() => {
        setIsDialogVisible(false);
        setIsDialogFailedVisible(true);
      });
  };
  return (
    <Provider>
      <Portal>
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              marginHorizontal: moderateScale(25),
            }}>
            <Gap height={moderateScale(20)} />
            <CardSaldo2 balance={dataBalance} />
            <Text style={styles.titleTransaksi}>Pembayaran</Text>
            <CardPembayaran
              serviceTitle={data.service_name}
              source={data.service_icon}
              tarif={data.service_tariff}
            />
            <Gap height={moderateScale(100)} />

            <CustomButton
              title="Bayar"
              style={{borderRadius: moderateScale(5)}}
              onPress={() => {
                setIsDialogVisible(true);
              }}
            />
          </ScrollView>
          <CustomDialog
            handleSubmit={() => {
              handleSubmit();
            }}
            isDialogVisible={isDialogVisible}
            setIsDialogVisible={setIsDialogVisible}
            top_up_amount={Number(data.service_tariff)}
            title={`Beli ${data.service_name} sebesar`}
          />

          <CustomDialog
            handleSubmit={() => {
              setIsDialogFailedVisible(false);
              navigation.replace('MainApp');
            }}
            type="failed"
            isDialogVisible={isDialogFailedVisible}
            setIsDialogVisible={setIsDialogFailedVisible}
            top_up_amount={Number(data.service_tariff)}
            navigation={navigation}
            title={`Pembayaran ${data.service_name} sebesar`}
          />
          <CustomDialog
            handleSubmit={() => {
              setIsDialogSuccessVisible(false);
              navigation.replace('MainApp');
            }}
            type="success"
            isDialogVisible={isDialogSuccessVisible}
            setIsDialogVisible={setIsDialogSuccessVisible}
            top_up_amount={Number(data.service_tariff)}
            navigation={navigation}
            title={`Pembayaran ${data.service_name} sebesar`}
          />
        </View>
      </Portal>
    </Provider>
  );
};

export default PembayaranScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTransaksi: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: moderateScale(50),
  },
});
