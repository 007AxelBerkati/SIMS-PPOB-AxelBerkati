import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICLogo} from '../../../assets';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, SIZES, fontSize} from '../../../themes';
import CustomTextInput from '../../../components/CustomTextInput';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {Formik} from 'formik';
import {loginSchema, signupSchema} from '../../../utils/validation';
import {SafeAreaView} from 'react-native';
import Gap from '../../../components/Gap';
import ErrorText from '../../../components/ErrorText';
import CustomButton from '../../../components/CustomButton';
import {RegisterType} from '../../../types/auth';
import {signUp} from '../../../redux';
import {useAppDispatch, useAppSelector} from '../../../redux/store';

type Props = {
  navigation: any;
};

const RegisterScreen = ({navigation}: Props) => {
  const {loading} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const onSubmit = (dataSignUp: RegisterType) => {
    dispatch(
      signUp({
        email: dataSignUp.email,
        first_name: dataSignUp.nama_depan,
        last_name: dataSignUp.nama_belakang,
        password: dataSignUp.buat_password,
      }),
    ).then(() => {
      navigation.navigate('LoginScreen');
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.containerLogo}>
              <Image source={ICLogo} style={styles.logo} resizeMode="contain" />
              <Text style={styles.titleLogo}>SIMS PPOB</Text>
            </View>
            <Text style={styles.title}>Masuk atau buat akun untuk memulai</Text>
            <Gap height={24} />
          </View>
          <Formik
            initialValues={{
              email: '',
              nama_depan: '',
              nama_belakang: '',
              buat_password: '',
              konfirmasi_password: '',
            }}
            onSubmit={values => onSubmit(values)}
            validationSchema={signupSchema}>
            {({
              handleChange,
              handleSubmit,
              errors,
              isValid,
              values,
              touched,
              handleBlur,
              dirty,
            }) => (
              <SafeAreaView>
                <CustomTextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="masukkan email anda"
                  onBlur={handleBlur('email')}
                  leftIcon="at"
                />
                {errors.email && touched.email && (
                  <ErrorText error={errors.email} />
                )}
                <Gap height={20} />
                <CustomTextInput
                  onChangeText={handleChange('nama_depan')}
                  value={values.nama_depan}
                  placeholder="nama depan"
                  onBlur={handleBlur('nama_depan')}
                  leftIcon="account"
                />
                {errors.nama_depan && touched.nama_depan && (
                  <ErrorText error={errors.nama_depan} />
                )}
                <Gap height={20} />

                <CustomTextInput
                  onChangeText={handleChange('nama_belakang')}
                  value={values.nama_belakang}
                  placeholder="nama belakang"
                  onBlur={handleBlur('nama_belakang')}
                  leftIcon="account"
                />
                {errors.nama_belakang && touched.nama_belakang && (
                  <ErrorText error={errors.nama_belakang} />
                )}
                <Gap height={20} />
                <CustomTextInput
                  onChangeText={handleChange('buat_password')}
                  value={values.buat_password}
                  placeholder="buat password"
                  onBlur={handleBlur('buat_password')}
                  secureTextEntry
                  leftIcon="lock-outline"
                />
                {errors.buat_password && touched.buat_password && (
                  <ErrorText error={errors.buat_password} />
                )}
                <Gap height={20} />
                <CustomTextInput
                  onChangeText={handleChange('konfirmasi_password')}
                  value={values.konfirmasi_password}
                  placeholder="konfirmasi password"
                  onBlur={handleBlur('konfirmasi_password')}
                  secureTextEntry
                  leftIcon="lock-outline"
                />
                {errors.konfirmasi_password && touched.konfirmasi_password && (
                  <ErrorText error={errors.konfirmasi_password} />
                )}

                <Gap height={24} />
                <CustomButton
                  title="Registrasi"
                  onPress={handleSubmit}
                  type="primary"
                  disable={!(dirty && isValid) || loading}
                />
              </SafeAreaView>
            )}
          </Formik>
          <Text
            style={{
              textAlign: 'center',
              marginTop: moderateScale(30),
              marginBottom: moderateScale(20),
            }}>
            <Text style={styles.text}>sudah punya akun? login</Text>
            <Text
              style={styles.textLink}
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              {' '}
              disini
            </Text>
          </Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(25),
    marginTop: moderateScale(30),
  },
  logo: {
    width: moderateScale(35),
    height: moderateScale(35),
    marginRight: moderateScale(10),
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: COLORS.text.primary,
    textAlign: 'center',
    marginTop: moderateScale(20),
  },
  titleLogo: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: COLORS.text.primary,
    textAlign: 'center',
  },

  text: {
    fontSize: fontSize.medium,
    color: COLORS.text.subTitle,
  },

  textLink: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});
