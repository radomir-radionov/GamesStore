import { all, fork } from "redux-saga/effects";
import gamesSaga from "redux/Games/saga";
import signUpSaga from "redux/userActivity/saga";

export default function* rootSaga() {
  yield all([fork(gamesSaga), fork(signUpSaga)]);
}
