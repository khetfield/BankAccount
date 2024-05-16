import { createSlice } from "@reduxjs/toolkit";

/**

 * @typedef Transaction
 * @property {"deposit"|"withdrawal"|"transfer/[name]"} type
 * @property {number} amount
 * @property {number} balance

/** @type {{balance: number, history: Transaction[]}} */
const initialState = {balance: 0, history:[]};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    withdrawal: (state, { payload }) => {
      state.balance -= payload.amount;
      state.history.push({
        type: "withdrawal",
        amount: payload.amount,
        balance: state.balance,
      });
    },
    deposit: (state, {payload}) => {
      state.balance += payload.amount;
      state.history.push({
        type: "deposit",
        amount: payload.amount,
        balance: state.balance,
      })
    },
    transfer: (state, { payload }) => {
      state.balance -= payload.amount;
      state.history.push({
        type: "transfer",
        amount: payload.amount,
        balance: state.balance,
      });
    },
  },
});

export const { deposit, withdrawal, transfer } = transactionsSlice.actions;

export const selectBalance = (state) => state.transactions.balance;
export const selectHistory = (state) => state.transactions.history;

export default transactionsSlice.reducer;