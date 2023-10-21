import {Formik} from 'formik';
import React, {useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import ErrorText from '../../components/ErrorText';
import Gap from '../../components/Gap';
import {UploadPhoto} from '../../components/akun';
import {signOut, updateDataProfile, updateDataProfileImage} from '../../redux';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {COLORS} from '../../themes';
import {inputUpdateProfileType} from '../../types/auth';
import {updateProfileSchema} from '../../utils/validation';
import FormData from 'form-data';

type Props = {
  navigation: any;
};

const DEFAULT_HEIGHT = moderateScale(400);
const DEFAULT_WITH = moderateScale(400);
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH,
};

const AkunScreen = ({navigation}: Props) => {
  const [editable, setEditable] = useState(false);

  const {dataProfile} = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const onSubmit = (dataUpdateProfile: inputUpdateProfileType) => {
    console.log(dataUpdateProfile);
    dispatch(
      updateDataProfile({
        first_name: dataUpdateProfile.first_name,
        last_name: dataUpdateProfile.last_name,
      }),
    );
    const formData = new FormData();

    formData.append('file', dataUpdateProfile.image);
    formData.append('file', {
      uri: dataUpdateProfile.image,
      type: 'image/jpeg',
      name: 'profile.jpg',
    });
    dispatch(updateDataProfileImage(formData));
    setEditable(false);
  };

  const imageCropPicker = async (
    setFieldValue: any,
    options = defaultPickerOptions,
  ) => {
    try {
      const image = await ImagePicker.openPicker(options);
      setFieldValue('image', image.path);
    } catch (err: any) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  const logOut = () => {
    Alert.alert('Konfirmasi', 'Apakah anda yakin ingin keluar?', [
      {
        text: 'Batal',
        onPress: () => {},
      },
      {
        text: 'Ya',
        onPress: () => {
          dispatch(signOut());
          navigation.replace('LoginScreen');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            email: dataProfile?.email,
            first_name: dataProfile?.first_name,
            last_name: dataProfile?.last_name,
            image: dataProfile?.profile_image,
          }}
          onSubmit={values => onSubmit(values)}
          validationSchema={updateProfileSchema}>
          {({
            handleChange,
            handleSubmit,
            errors,
            isValid,
            values,
            touched,
            handleBlur,
            resetForm,
            dirty,
            setFieldValue,
          }) => (
            <SafeAreaView>
              <UploadPhoto
                label={dataProfile.first_name + ' ' + dataProfile.last_name}
                source={values.image}
                onPress={() => {
                  editable && imageCropPicker(setFieldValue);
                }}
                isEdit={editable}
              />
              <Text style={styles.inputLabel}>Email</Text>
              <CustomTextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                leftIcon="at"
                placeholder="Masukkan email anda"
                editable={false}
                style={{backgroundColor: COLORS.disable.background}}
              />
              {errors.email && touched.email && (
                <ErrorText error={errors.email} />
              )}
              <Gap height={20} />
              <Text style={styles.inputLabel}>Nama Depan</Text>
              <CustomTextInput
                value={values.first_name}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                leftIcon="account"
                placeholder="Masukkan nama depan anda"
                editable={editable}
                style={
                  editable ? {} : {backgroundColor: COLORS.disable.background}
                }
              />
              {errors.first_name && touched.first_name && (
                <ErrorText error={errors.first_name} />
              )}
              <Gap height={20} />
              <Text style={styles.inputLabel}>Nama Belakang</Text>

              <CustomTextInput
                value={values.last_name}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                leftIcon="account"
                placeholder="Masukkan nama belakang anda"
                editable={editable}
                style={
                  editable ? {} : {backgroundColor: COLORS.disable.background}
                }
              />

              {errors.last_name && touched.last_name && (
                <ErrorText error={errors.last_name} />
              )}

              <Gap height={24} />
              <CustomButton
                title={editable ? 'Simpan' : 'Edit Profile'}
                onPress={editable ? handleSubmit : () => setEditable(true)}
                type="secondary"
                style={{borderRadius: moderateScale(5)}}
                disable={!isValid}
              />

              <Gap height={24} />

              <CustomButton
                title={editable ? 'Batal' : 'Logout'}
                onPress={
                  editable
                    ? () => {
                        setEditable(false);
                        resetForm();
                      }
                    : () => {
                        logOut();
                      }
                }
                type="primary"
                style={{
                  borderRadius: moderateScale(5),
                  marginBottom: moderateScale(20),
                }}
              />
            </SafeAreaView>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default AkunScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(25),
  },

  inputLabel: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: moderateScale(10),
  },
});
