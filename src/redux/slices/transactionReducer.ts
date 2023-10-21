import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {showError} from '../../plugins';
import {getBalance, topUp} from '../../services';

type TransactionStateType = {
  dataBalance: number;
  loading: boolean;
};

const initialState: TransactionStateType = {
  loading: false,
  dataBalance: 0,
};

export const getDataBalance = createAsyncThunk(
  'transaction/balance',
  async () => {
    try {
      const response = await getBalance();
      return response.data.data.balance;
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

export const topUpBalance = createAsyncThunk(
  'transaction/topUpBalance',
  async (values: any) => {
    try {
      const response = await topUp(values);
      return response.data.data.balance;
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    // ==> normal reducer functions go here
  },
  extraReducers(builder) {
    builder.addCase(getDataBalance.pending, state => {
      state.loading = true;
    });
    builder.addCase(getDataBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.dataBalance = action.payload;
    });
    builder.addCase(getDataBalance.rejected, state => {
      state.loading = false;
    });
    builder.addCase(topUpBalance.pending, state => {
      state.loading = true;
    });
    builder.addCase(topUpBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.dataBalance = action.payload;
    });
    builder.addCase(topUpBalance.rejected, state => {
      state.loading = false;
    });
  },
});

export default transactionSlice.reducer;
