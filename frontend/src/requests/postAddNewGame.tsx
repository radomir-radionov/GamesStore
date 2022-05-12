import axios from "axios";
import dataServer from "constants/data";
import { INewGame } from "types";

export const postAddNewGame = async (newGame: INewGame) => {
  await axios.post(`${dataServer.ADDGAME}`, {
    newGame,
  });
};
