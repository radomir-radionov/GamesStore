import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameData } from "types";

interface IInitialState {
  loading: boolean;
  topGames: IGameData[];
  games: IGameData[];
  cartGames: IGameData[];
  filteredGamesParamsRequest: null;
  filteredGames: IGameData[];
  payloadNewGame: null;
  editGame: null;
  newGameData: null;
}

const initialState: IInitialState = {
  loading: false,
  topGames: [],
  games: [],
  cartGames: [],
  filteredGamesParamsRequest: null,
  filteredGames: [],
  payloadNewGame: null,
  editGame: null,
  newGameData: null,
};

export const gamesSlice = createSlice({
  name: "GAMES",
  initialState,
  reducers: {
    getTopGamesRequestAction: (state) => {
      state.loading = true;
    },
    setTopGames: (state, { payload }) => {
      state.topGames = payload;
      state.loading = false;
    },
    addNewGame: (state, { payload }) => {
      state.payloadNewGame = payload;
    },
    filteredGamesParams: (state, { payload }) => {
      state.filteredGamesParamsRequest = payload;
    },
    filteredGames: (state, { payload }) => {
      state.filteredGames = payload;
    },
    addEditGameData: (state, { payload }) => {
      state.editGame = payload;
    },
    updateCartGamesData: (state, { payload }) => {
      state.cartGames = payload;
    },
    editGame: (state, { payload }) => {
      state.newGameData = payload;
    },
    addGameInCart: (state, { payload }) => {
      state.cartGames = [...state.cartGames, payload];
    },
    deleteGame: () => {},
  },
});

export const {
  getTopGamesRequestAction,
  setTopGames,
  addNewGame,
  addEditGameData,
  editGame,
  deleteGame,
  filteredGamesParams,
  filteredGames,
  addGameInCart,
  updateCartGamesData,
} = gamesSlice.actions;

export default gamesSlice.reducer;
