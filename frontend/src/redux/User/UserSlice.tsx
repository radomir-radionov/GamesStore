import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  currentUser: null,
  balance: "1000",
  payloadDataLogin: null,
  payloadDataName: null,
  payloadDataPassword: null,
  error: {
    isError: false,
    textError: "",
  },
};

export const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.isAuth = true;
      state.currentUser = payload;
    },
    loginDataRequest: (state, { payload }) => {
      state.isAuth = true;
      state.currentUser = payload;
    },
    loginData: (state, { payload }) => {
      state.payloadDataLogin = payload;
    },
    userChangeNameData: (state, { payload }) => {
      state.payloadDataName = payload;
    },
    userChangeNameDataRequest: (state, { payload }) => {
      state.currentUser = payload;
    },
    userChangepPasswordData: (state, { payload }) => {
      state.payloadDataPassword = payload;
    },
    userChangepPasswordDataRequest: (state, { payload }) => {
      state.currentUser = payload;
    },
    updateUserBalance: (state, { payload }) => {
      state.balance = payload;
    },
    logout: () => initialState,
    setError: (state, { payload }) => {
      state.error.isError = true;
      state.error.textError = payload;
    },
    upDateError: (state) => {
      state.error.isError = false;
      state.error.textError = "";
    },
  },
});

export const {
  setUser,
  logout,
  loginData,
  loginDataRequest,
  userChangeNameData,
  userChangeNameDataRequest,
  userChangepPasswordData,
  userChangepPasswordDataRequest,
  setError,
  upDateError,
  updateUserBalance,
} = userSlice.actions;

export default userSlice.reducer;
