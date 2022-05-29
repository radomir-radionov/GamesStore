import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGameData } from "types";

interface IInitialState {
  loading: boolean;
  topGames: IGameData[];
  searchedGames: any[];
  games: IGameData[];
  cartGames: IGameData[];
  filteredGamesParamsRequest: null;
  filteredGames: IGameData[];
  payloadNewGame: null;
  editGame: null;
  newGameData: null;
  error: string;
}

const initialState: IInitialState = {
  topGames: [],
  searchedGames: [],
  games: [],
  cartGames: [],
  filteredGamesParamsRequest: null,
  filteredGames: [],
  payloadNewGame: null,
  editGame: null,
  newGameData: null,
  loading: false,
  error: "",
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
    getFilteredGames: (state, { payload }) => {
      state.filteredGamesParamsRequest = payload;
    },
    setFilteredGames: (state, { payload }) => {
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
    getSearchedGames: (state, { payload }) => {},
    setSearchedGames: (state, { payload }) => {
      state.searchedGames = payload;
    },
    deleteGame: () => {},
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  getTopGamesRequestAction,
  setTopGames,
  addNewGame,
  addEditGameData,
  editGame,
  deleteGame,
  getFilteredGames,
  setFilteredGames,
  addGameInCart,
  updateCartGamesData,
  getSearchedGames,
  setSearchedGames,
  setLoading,
} = gamesSlice.actions;

export default gamesSlice.reducer;
