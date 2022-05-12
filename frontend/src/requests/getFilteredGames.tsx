import axios from "axios";

export const getFilteredGames = async ({
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

export default getFilteredGames;
