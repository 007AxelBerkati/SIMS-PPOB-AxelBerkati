import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {instance} from '../../config';
import {showError, showSuccess, storeData} from '../../plugins';
import {getProfile, login, register} from '../../services';
import {LoginType, RegisterResponseType} from '../../types/auth';

type authStateType = {
  token: string;
  loading: boolean;
  errorLogin: string;
  errorRegister: string;
  dataProfile: any;
};

const initialState: authStateType = {
  token: '',
  loading: false,
  dataProfile: {},
  errorLogin: '',
  errorRegister: '',
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (values: LoginType) => {
    try {
      const responses = await login(values);
      const {token} = responses.data.data;
      storeData('token', token);
      instance.defaults.headers.Authorization = `Bearer ${token}`;
      showSuccess('Berhasil login');
      return token;
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (values: RegisterResponseType) => {
    try {
      const response = await register(values);
      showSuccess('Berhasil mendaftar');
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

export const getDataProfile = createAsyncThunk(
  'auth/getDataProfile',
  async () => {
    try {
      const response = await getProfile();
      return response.data.data;
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload || '';
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.errorLogin = action.error.message || '';
      })
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.errorRegister = action.error.message || '';
      })
      .addCase(getDataProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDataProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.dataProfile = action.payload || {};
      })
      .addCase(getDataProfile.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const {setToken} = authSlice.actions;

export default authSlice.reducer;
