import axios from "axios";

export const deleteGameRequest = (game: any) => {
  axios.delete(`http://localhost:5000/api/product/${game?._id}`);
};
