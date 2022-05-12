import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  put,
  select,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";
import { setError } from "redux/userActivity/UserActivitySlice";
import { deleteGameRequest } from "requests/deleteGameRequest";
import getSearchGamed from "requests/getFilteredGames";
import { getTopGamesRequest } from "requests/getTopGamesRequest";
import { postAddNewGame } from "requests/postAddNewGame";
import { putEditCardGame } from "requests/putEditCardGame";
import {
  addNewGame,
  deleteGame,
  editGame,
  filteredGames,
  filteredGamesParams,
  getTopGamesRequestAction,
  setTopGames,
} from "./GamesSlice";
import {
  getEditGameDataSelector,
  getFilteredGamesParamsSelector,
  getNewEditGameDataSelector,
} from "./selectors";

export function* getTopGames(): Generator<StrictEffect, void> {
  try {
    const data = yield call(() => getTopGamesRequest());
    yield put(setTopGames(data));
  } catch (e) {
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(getTopGamesRequest)!!!"
      )
    );
  }
}

export function* filteredGamesSaga(): Generator<StrictEffect, void> {
  const requestParams = yield select(getFilteredGamesParamsSelector);
  try {
    const filteredGamesData = yield call(() => getSearchGamed(requestParams));
    yield put(filteredGames(filteredGamesData));
  } catch (e) {
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(getSearchGamed)!!!"
      )
    );
  }
}

  export function* addNewGameSaga({
    payload,
  }: PayloadAction<any>): Generator<StrictEffect, void> {
  try {
    yield call(() => postAddNewGame(payload));
  } catch (e) {
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(postAddNewGame)!!!"
      )
    );
  }
}

export function* editGameSaga(): Generator<StrictEffect, void> {
  const newGameData = yield select(getNewEditGameDataSelector);
  try {
    yield call(() => putEditCardGame(newGameData));
  } catch (e) {
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(putEditCardGame)!!!"
      )
    );
  }
}

export function* deleteGameSaga(): Generator<StrictEffect, void> {
  const game = yield select(getEditGameDataSelector);
  try {
    yield call(() => deleteGameRequest(game));
  } catch (e) {
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(deleteGameRequest)!!!"
      )
    );
  }
}

export default function* gamesSaga() {
  yield all([
    takeLatest(getTopGamesRequestAction, getTopGames),
    takeLatest(addNewGame, addNewGameSaga),
    takeLatest(editGame, editGameSaga),
    takeLatest(deleteGame, deleteGameSaga),
    takeLatest(filteredGamesParams, filteredGamesSaga),
  ]);
}
