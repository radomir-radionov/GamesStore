import axios from "axios";
import dataServer from "constants/data";

export const getTopGamesRequest = async () => {
  const request = await axios.get(dataServer.GAMES);

  return request.data;
};
