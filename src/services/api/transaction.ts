import {instance} from '../../config';

export const getBalance = async () => await instance.get('/balance');
export const topUp = async (values: any) =>
  await instance.post('/topup', values);
export const transaction = async (values: any) =>
  await instance.post('/transaction', values);

export const transactionHistory = async (params: any) =>
  await instance.get(`/transaction/history${params}`);
