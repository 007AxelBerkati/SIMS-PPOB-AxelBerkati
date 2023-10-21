export interface RegisterType {
  nama_depan: string;
  nama_belakang: string;
  email: string;
  buat_password: string;
  konfirmasi_password: string;
}

export interface RegisterResponseType {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}
export interface LoginType {
  email: string;
  password: string;
}

export interface UpdateProfileType {
  first_name: string;
  last_name: string;
}
