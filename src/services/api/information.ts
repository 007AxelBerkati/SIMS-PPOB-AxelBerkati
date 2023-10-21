import {instance} from '../../config';

export const services = async () => await instance.get('/services');

export const banner = async () => await instance.get('/banner');
