import axios from "axios";

const getSearchedGamesRequest = async (searchText: any) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/search?searchText=${searchText}`
  );
  return data;
};

export default getSearchedGamesRequest;
