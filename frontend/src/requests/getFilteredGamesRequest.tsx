import axios from "axios";

const getFilteredGamesRequest = async ({
  age,
  criteria,
  genre,
  platform,
  searchText,
}: any) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/products/${platform}?platform=${platform}&criteria=${criteria}&genre=${genre}&age=${age}&searchText=${searchText}`
  );
  return data;
};

export default getFilteredGamesRequest;
