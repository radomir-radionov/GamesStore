import { createSelector } from "@reduxjs/toolkit";

const User = (state: any) => state.user;

export const getCurrentUserDataSelector = createSelector(
  User,
  (state) => state.currentUser
);

export const getAuthSelector = createSelector(User, (state) => state.isAuth);

export const getUserNameSelector = createSelector(
  User,
  (state) => state.currentUser.name
);

export const getUserBalanceSelector = createSelector(
  User,
  (state) => state.balance
);

export const getErrorSelector = createSelector(User, (state) => state.error);
