import {instance} from '../../config';
import {LoginType, RegisterResponseType, RegisterType} from '../../types/auth';

export const login = (values: LoginType) =>
  instance.post('/login', {...values});

export const register = (values: RegisterResponseType) =>
  instance.post('/registration', values);
