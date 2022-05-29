import axios from "axios";
import dataServer from "constants/data";
import { INewGame } from "types";

const postAddNewGameRequest = async (newGame: INewGame) => {
  const data = await axios.post(`${dataServer.ADDGAME}`, {
    newGame,
  });
  return data;
};

export default postAddNewGameRequest;
