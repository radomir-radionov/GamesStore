import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  put,
  select,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";
import { postNewUserName } from "requests/postNewUserName";
import { postNewUserPassword } from "requests/postNewUserPassword";
import { postSignInData } from "requests/postSignInData";
import { postSignUpData } from "requests/postSignUpData";
import { getCurrentUserDataSelector } from "./selectors";
import {
  setUser,
  loginDataRequest,
  loginData,
  userChangeNameData,
  userChangeNameDataRequest,
  userChangepPasswordData,
  userChangepPasswordDataRequest,
  setError,
} from "./UserActivitySlice";

interface ISignUpDataPayload {
  email: string;
  name: string;
  password: string;
  id: string;
}

interface ISignInDataPayload {
  email: string;
  password: string;
}

interface ISignInDataPayload {
  email: string;
  password: string;
}

interface IChangeUserPasswordPayload {
  password: string;
}

interface IChangeUserNamePayload {
  name: string;
}

export function* signUp({ payload }: PayloadAction<ISignUpDataPayload>) {
  const { email, name, password } = payload;
  try {
    yield call(() => postSignUpData(email, name, password));
  } catch (e) {
    yield put(setError("User is not authorized!!!"));
  }
}

export function* signIn({
  payload,
}: PayloadAction<ISignInDataPayload>): Generator<StrictEffect, void> {
  const { email, password } = payload;
  try {
    const data = yield call(() => postSignInData(email, password));
    yield put(loginDataRequest(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    yield put(setError("User is not found!!!"));
  }
}

export function* changeUserName({
  payload,
}: PayloadAction<IChangeUserNamePayload>): Generator<StrictEffect, void> {
  const { name } = payload;
  try {
    const currentUser = yield select(getCurrentUserDataSelector);
    const data = yield call(() => postNewUserName(name, currentUser));
    yield put(userChangeNameDataRequest(data));
  } catch (e) {
    yield put(setError("Name not changed!!!"));
  }
}

export function* changeUserPassword({
  payload,
}: PayloadAction<IChangeUserPasswordPayload>): Generator<
  StrictEffect,
  void,
  string
> {
  const { password } = payload;
  const currentUser = yield select(getCurrentUserDataSelector);
  try {
    const data = yield call(() => postNewUserPassword(password, currentUser));
    yield put(userChangepPasswordDataRequest(data));
  } catch (e) {
    yield put(setError("Password not changed!!!"));
  }
}

export default function* signUpSaga() {
  yield all([
    takeLatest(setUser, signUp),
    takeLatest(loginData, signIn),
    takeLatest(userChangeNameData, changeUserName),
    takeLatest(userChangepPasswordData, changeUserPassword),
  ]);
}
