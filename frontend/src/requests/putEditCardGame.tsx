import axios from "axios";
import dataServer from "constants/data";

export const putEditCardGame = async (game: any) => {
  const { _id, name, genre, description, price, image, platform, age } = game;
  await axios.put(`${dataServer.ADDGAME}`, {
    _id,
    name,
    genre,
    description,
    price,
    image,
    platform,
    age,
  });
};
