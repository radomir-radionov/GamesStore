import axios from "axios";

const deleteGameRequest = (game: any) => {
  axios.delete(`http://localhost:5000/api/product/${game?._id}`);
};

export default deleteGameRequest;
