import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  put,
  select,
  StrictEffect,
  takeLatest,
} from "redux-saga/effects";
import { setError } from "redux/User/UserSlice";
import {
  getTopGamesRequest,
  getSearchedGamesRequest,
  postAddNewGameRequest,
  putEditCardGameRequest,
  deleteGameRequest,
  getFilteredGamesRequest,
} from "requests";
import {
  addNewGame,
  deleteGame,
  editGame,
  getFilteredGames,
  getSearchedGames,
  getTopGamesRequestAction,
  setFilteredGames,
  setLoading,
  setSearchedGames,
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

export function* getSearchedGamesSaga({
  payload,
}: any): Generator<StrictEffect, void> {
  try {
    yield put(setLoading(true));
    const data = yield call(() => getSearchedGamesRequest(payload));
    yield put(setSearchedGames(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(getSearchedGamesRequest)!!!"
      )
    );
  }
}

export function* filteredGamesSaga(): Generator<StrictEffect, void> {
  const requestParams = yield select(getFilteredGamesParamsSelector);
  try {
    yield put(setLoading(true));
    const filteredGamesData = yield call(() =>
      getFilteredGamesRequest(requestParams)
    );
    yield put(setFilteredGames(filteredGamesData));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield put(
      setError(
        "We're sorry, but there was an error processing your request(getFilteredGamesRequest)!!!"
      )
    );
  }
}

export function* addNewGameSaga({
  payload,
}: PayloadAction<any>): Generator<StrictEffect, void> {
  try {
    yield call(() => postAddNewGameRequest(payload));
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
    yield call(() => putEditCardGameRequest(newGameData));
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
    takeLatest(getFilteredGames, filteredGamesSaga),
    takeLatest(getSearchedGames, getSearchedGamesSaga),
  ]);
}
