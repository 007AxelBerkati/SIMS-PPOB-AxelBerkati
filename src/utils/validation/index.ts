import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email Tidak Valid')
    .required('Tolong Isi Email')
    .trim(),
  password: Yup.string().required('Tolong Isi Password').trim(),
});

export const signupSchema = Yup.object().shape({
  nama_depan: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .trim()
    .required('Tolong Isi Nama Depan'),
  nama_belakang: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').trim(),
  email: Yup.string()
    .email('Email Tidak Valid')
    .required('Tolong Isi Email Anda'),
  buat_password: Yup.string()
    .required('Tolong Isi Password Anda')
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  konfirmasi_password: Yup.string()
    .required('Tolong Isi Password Anda')
    .trim()
    .oneOf([Yup.ref('buat_password'), null], 'Password Tidak Sama'),
});
