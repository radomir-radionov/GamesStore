import { createSelector } from "@reduxjs/toolkit";

const games = (state: any) => state.games;

export const getTopGamesSelector = createSelector(
  games,
  (state) => state.topGames
);

export const getSearchedGamesSelector = createSelector(
  games,
  (state) => state.searchedGames
);

export const getNewGameDataSelector = createSelector(
  games,
  (state) => state.payloadNewGame
);

export const getEditGameDataSelector = createSelector(
  games,
  (state) => state.editGame
);

export const getNewEditGameDataSelector = createSelector(
  games,
  (state) => state.newGameData
);

export const getFilteredGamesParamsSelector = createSelector(
  games,
  (state) => state.filteredGamesParamsRequest
);

export const getFilteredGamesSelector = createSelector(
  games,
  (state) => state.filteredGames
);

export const getGamesInCartSelector = createSelector(
  games,
  (state) => state.cartGames
);

export const getLoadingSelector = createSelector(
  games,
  (state) => state.loading
);

export const getErrorSelector = createSelector(games, (state) => state.error);
