import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  put,
  select,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";
import {
  postSignUpDataRequest,
  postSignInDataRequest,
  postNewUserNameRequest,
  postNewUserPasswordRequest,
} from "requests";
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
} from "./UserSlice";

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

export function* signUpSaga({
  payload,
}: PayloadAction<ISignUpDataPayload>): Generator<StrictEffect, void> {
  const { email, name, password } = payload;
  try {
    yield call(() => postSignUpDataRequest(email, name, password));
    const data = yield call(() => postSignInDataRequest(email, password));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    yield put(setError("User is not authorized!!!"));
  }
}

export function* signInSaga({
  payload,
}: PayloadAction<ISignInDataPayload>): Generator<StrictEffect, void> {
  const { email, password } = payload;
  try {
    const data = yield call(() => postSignInDataRequest(email, password));
    yield put(loginDataRequest(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    yield put(setError("User is not found!!!"));
  }
}

export function* changeUserNameSaga({
  payload,
}: PayloadAction<IChangeUserNamePayload>): Generator<StrictEffect, void> {
  const { name } = payload;
  try {
    const currentUser = yield select(getCurrentUserDataSelector);
    const data = yield call(() => postNewUserNameRequest(name, currentUser));
    yield put(userChangeNameDataRequest(data));
  } catch (e) {
    yield put(setError("Name not changed!!!"));
  }
}

export function* changeUserPasswordSaga({
  payload,
}: PayloadAction<IChangeUserPasswordPayload>): Generator<
  StrictEffect,
  void,
  string
> {
  const { password } = payload;
  const currentUser = yield select(getCurrentUserDataSelector);
  try {
    const data = yield call(() =>
      postNewUserPasswordRequest(password, currentUser)
    );
    yield put(userChangepPasswordDataRequest(data));
  } catch (e) {
    yield put(setError("Password not changed!!!"));
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(setUser, signUpSaga),
    takeLatest(loginData, signInSaga),
    takeLatest(userChangeNameData, changeUserNameSaga),
    takeLatest(userChangepPasswordData, changeUserPasswordSaga),
  ]);
}
