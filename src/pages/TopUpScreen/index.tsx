import {Formik} from 'formik';
import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Portal, Provider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {dataTopUp} from '../../assets';
import CardSaldo2 from '../../components/CardSaldo2';
import CustomButton from '../../components/CustomButton';
import CustomDialog from '../../components/CustomDialog';
import CustomTextInput from '../../components/CustomTextInput';
import ErrorText from '../../components/ErrorText';
import Gap from '../../components/Gap';
import {CardTopUp} from '../../components/topUp';
import {topUpBalance} from '../../redux';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {COLORS, fontSize} from '../../themes';
import {TopUpType} from '../../types/transaction';
import {topUpSchema} from '../../utils/validation';

type Props = {
  navigation: any;
};

const TopUpScreen = ({navigation}: Props) => {
  const {dataBalance} = useAppSelector(state => state.transaction);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isDialogSuccessVisible, setIsDialogSuccessVisible] = useState(false);
  const [isDialogFailedVisible, setIsDialogFailedVisible] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (dataTopUp: TopUpType) => {
    dispatch(topUpBalance(dataTopUp))
      .then(() => {
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
        <Formik
          initialValues={{
            top_up_amount: '',
          }}
          onSubmit={(values, {resetForm}) => {
            onSubmit({top_up_amount: Number(values.top_up_amount)});
            // resetForm();
          }}
          validationSchema={topUpSchema}>
          {({
            handleChange,
            handleSubmit,
            errors,
            isValid,
            values,
            touched,
            handleBlur,
            setFieldValue,
            dirty,
          }) => (
            <View style={styles.container}>
              <ScrollView
                style={{flex: 1, marginHorizontal: moderateScale(20)}}
                showsVerticalScrollIndicator={false}>
                <Gap height={moderateScale(20)} />
                <CardSaldo2 balance={dataBalance} />
                <Text style={styles.titleTransaksi}>Silahkan masukan</Text>
                <Text style={styles.labelTransaksi}>nominal Top Up</Text>

                <SafeAreaView>
                  <Gap height={moderateScale(30)} />
                  <CustomTextInput
                    value={values.top_up_amount.toString()}
                    onChangeText={handleChange('top_up_amount')}
                    onBlur={handleBlur('top_up_amount')}
                    leftIcon="cash-100"
                    keyboardType="numeric"
                    placeholder="Masukkan nominal Top Up"
                  />
                  {errors.top_up_amount && touched.top_up_amount && (
                    <ErrorText error={errors.top_up_amount} />
                  )}
                  <Gap height={20} />
                  <View>
                    <FlatList
                      data={dataTopUp}
                      keyExtractor={(item: any) => item.id}
                      scrollEnabled={false}
                      renderItem={({item}) => (
                        <CardTopUp
                          nominal={item.nominal}
                          setFieldValue={setFieldValue}
                        />
                      )}
                      ItemSeparatorComponent={() => (
                        <Gap height={moderateScale(20)} />
                      )}
                      numColumns={3}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{
                        paddingTop: moderateScale(20),
                        paddingBottom: moderateScale(20),
                      }}
                    />
                  </View>
                  <CustomButton
                    title={'Top Up'}
                    onPress={() => {
                      setIsDialogVisible(true);
                    }}
                    type="primary"
                    style={{borderRadius: moderateScale(5)}}
                    disable={!(dirty && isValid)}
                  />
                </SafeAreaView>

                <Gap height={moderateScale(20)} />
              </ScrollView>

              <CustomDialog
                handleSubmit={handleSubmit}
                isDialogVisible={isDialogVisible}
                setIsDialogVisible={setIsDialogVisible}
                top_up_amount={Number(values.top_up_amount)}
                title={`Anda yakin untuk Top Up`}
              />

              <CustomDialog
                handleSubmit={() => {
                  setIsDialogFailedVisible(false);
                  navigation.replace('MainApp');
                }}
                type="failed"
                isDialogVisible={isDialogFailedVisible}
                setIsDialogVisible={setIsDialogFailedVisible}
                top_up_amount={Number(values.top_up_amount)}
                navigation={navigation}
                title={`Top Up sebesar`}
              />
              <CustomDialog
                handleSubmit={() => {
                  setIsDialogSuccessVisible(false);
                  navigation.replace('MainApp');
                }}
                type="success"
                isDialogVisible={isDialogSuccessVisible}
                setIsDialogVisible={setIsDialogSuccessVisible}
                top_up_amount={Number(values.top_up_amount)}
                navigation={navigation}
                title={`Top Up sebesar`}
              />
            </View>
          )}
        </Formik>
      </Portal>
    </Provider>
  );
};

export default TopUpScreen;

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
  labelTransaksi: {
    fontSize: fontSize.xxxxlarge,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: moderateScale(5),
  },
  dialog: {
    backgroundColor: COLORS.background.primary,
  },

  textDialog: {
    fontSize: fontSize.large,
    marginBottom: 4,
    color: COLORS.text.primary,
    textAlign: 'center',
  },
  nominal: {
    fontSize: fontSize.xxxxlarge,
    marginBottom: 4,
    color: COLORS.text.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageLogo: {
    width: moderateScale(50),
    height: moderateScale(50),
    alignSelf: 'center',
  },

  ya: {
    fontSize: fontSize.medium,
    color: COLORS.button.primary.backgroundColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  tidak: {
    fontSize: fontSize.medium,
    color: COLORS.text.subTitle,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  success: {
    alignSelf: 'center',
    backgroundColor: COLORS.success,
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },

  failed: {
    alignSelf: 'center',
    backgroundColor: COLORS.button.primary.backgroundColor,
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
