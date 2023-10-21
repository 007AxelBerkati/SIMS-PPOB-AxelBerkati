import {instance} from '../../config';
import {
  LoginType,
  RegisterResponseType,
  UpdateProfileType,
} from '../../types/auth';

export const login = async (values: LoginType) =>
  await instance.post('/login', {...values});

export const register = async (values: RegisterResponseType) =>
  await instance.post('/registration', values);

export const getProfile = async () => await instance.get('/profile');

export const updateProfile = async (values: UpdateProfileType) =>
  await instance.put('/profile', values);

export const updateProfileImage = async (values: any) =>
  await instance.put('/profile/image', values);
