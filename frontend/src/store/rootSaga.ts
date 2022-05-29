import { all, fork } from "redux-saga/effects";
import gamesSaga from "redux/Games/saga";
import userSaga from "redux/User/saga";

export default function* rootSaga() {
  yield all([fork(gamesSaga), fork(userSaga)]);
}
