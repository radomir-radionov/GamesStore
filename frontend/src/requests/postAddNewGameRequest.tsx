import axios from "axios";
import dataServer from "constants/data";
import { INewGame } from "types";

const postAddNewGameRequest = async (newGame: INewGame) => {
  await axios.post(`${dataServer.ADDGAME}`, {
    newGame,
  });
};

export default postAddNewGameRequest;
