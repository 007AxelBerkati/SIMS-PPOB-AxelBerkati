import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {banner, getProfile, login, register, services} from '../../services';
import {LoginType, RegisterResponseType} from '../../types/auth';
import {showError, showSuccess, storeData} from '../../plugins';

type InformationStateType = {
  dataBanner: any;
  loading: boolean;
  dataServices: any;
};

const initialState: InformationStateType = {
  loading: false,
  dataBanner: [],
  dataServices: [],
};

export const getBanner = createAsyncThunk('information/banner', async () => {
  try {
    const response = await banner();

    return response.data.data;
  } catch (error: any) {
    showError(error.response.data.message);
    return error.response.data.message;
  }
});

export const getDataServices = createAsyncThunk(
  'information/services',
  async () => {
    try {
      const response = await services();
      return response.data.data;
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

export const informationSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder.addCase(getBanner.pending, state => {
      state.loading = true;
    });
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.loading = false;
      state.dataBanner = action.payload;
    });
    builder.addCase(getBanner.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getDataServices.pending, state => {
      state.loading = true;
    });
    builder.addCase(getDataServices.fulfilled, (state, action) => {
      state.loading = false;
      state.dataServices = action.payload;
    });
    builder.addCase(getDataServices.rejected, state => {
      state.loading = false;
    });
  },
});

export default informationSlice.reducer;
