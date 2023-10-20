import {Formik} from 'formik';
import React from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {ICLogo} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import ErrorText from '../../../components/ErrorText';
import Gap from '../../../components/Gap';
import {COLORS, fontSize} from '../../../themes';
import {LoginType} from '../../../types/auth';
import {loginSchema} from '../../../utils/validation';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {signIn} from '../../../redux';

type Props = {
  navigation: any;
};

const LoginScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.auth);

  const onSubmit = (dataLogin: LoginType) => {
    dispatch(signIn(dataLogin));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.containerLogo}>
            <Image source={ICLogo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.titleLogo}>SIMS PPOB</Text>
          </View>
          <Text style={styles.title}>Masuk atau buat akun untuk memulai</Text>
          <Gap height={24} />
        </View>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => onSubmit(values)}
          validationSchema={loginSchema}>
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
                placeholder="Masukkan email anda"
                onBlur={handleBlur('email')}
                leftIcon="at"
              />
              {errors.email && touched.email && (
                <ErrorText error={errors.email} />
              )}
              <Gap height={20} />
              <CustomTextInput
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Masukkan password anda"
                onBlur={handleBlur('password')}
                secureTextEntry
                leftIcon="lock-outline"
              />
              {errors.password && touched.password && (
                <ErrorText error={errors.password} />
              )}

              <Gap height={24} />
              <CustomButton
                title="Login"
                onPress={handleSubmit}
                type="primary"
                disable={!(dirty && isValid) || loading}
              />
            </SafeAreaView>
          )}
        </Formik>
        <Text style={{textAlign: 'center', marginTop: moderateScale(30)}}>
          <Text style={styles.text}>belum punya akun? registrasi</Text>
          <Text
            style={styles.textLink}
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}>
            {' '}
            disini
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(25),
    marginTop: moderateScale(100),
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
