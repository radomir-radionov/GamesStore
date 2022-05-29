import axios from "axios";
import dataServer from "constants/data";

const getTopGamesRequest = async () => {
  const request = await axios.get(dataServer.GAMES);

  return request.data;
};

export default getTopGamesRequest;
