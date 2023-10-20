import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {login, register} from '../../services';
import {LoginType, RegisterResponseType} from '../../types/auth';
import {showError, showSuccess} from '../../plugins';

type authStateType = {
  token: string;
  loading: boolean;
  errorLogin: string;
  errorRegister: string;
};

const initialState: authStateType = {
  token: '',
  loading: false,
  errorLogin: '',
  errorRegister: '',
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (values: LoginType) => {
    try {
      await login(values).then(res => {
        showSuccess('Berhasil masuk');
        return res.data.token;
      });
    } catch (error: any) {
      showError(error.response.data.message);
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (values: RegisterResponseType) => {
    try {
      await register(values).then(res => {
        showSuccess('Berhasil mendaftar');
      });
    } catch (error: any) {
      showError(error.response.data.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
