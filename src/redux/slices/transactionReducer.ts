import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {showError} from '../../plugins';
import {
  getBalance,
  topUp,
  transaction,
  transactionHistory,
} from '../../services';

type TransactionStateType = {
  dataBalance: number;
  loading: boolean;
  dataHistory: any[];
  dataTransaction: any;
};

const initialState: TransactionStateType = {
  loading: false,
  dataBalance: 0,
  dataHistory: [],
  dataTransaction: {},
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

export const transactionDataHistory = createAsyncThunk(
  'transaction/history',
  async (params: any) => {
    try {
      console.log(params);
      const response = await transactionHistory(
        `?offset=${params.offset}&limit=${params.limit}`,
      );
      return response.data.data.records;
    } catch (error: any) {
      showError(error.response.data.message);
      return error.response.data.message;
    }
  },
);

export const transactionPembayaran = createAsyncThunk(
  'transaction/pembayaran',
  async (values: any) => {
    try {
      const response = await transaction(values);
      return response.data.data;
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
    builder.addCase(transactionDataHistory.pending, state => {
      state.loading = true;
    });
    builder.addCase(transactionDataHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.dataHistory = action.payload;
    });
    builder.addCase(transactionDataHistory.rejected, state => {
      state.loading = false;
    });
    builder.addCase(transactionPembayaran.pending, state => {
      state.loading = true;
    });
    builder.addCase(transactionPembayaran.fulfilled, (state, action) => {
      state.loading = false;
      state.dataTransaction = action.payload;
    });
    builder.addCase(transactionPembayaran.rejected, state => {
      state.loading = false;
    });
  },
});

export default transactionSlice.reducer;
