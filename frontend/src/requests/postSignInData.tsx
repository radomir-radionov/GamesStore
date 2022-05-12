import axios from "axios";
import dataServer from "constants/data";

export const postSignInData = async (email: string, password: string) => {
  const response = await axios.post(`${dataServer.LOGIN}`, {
    email,
    password,
  });
  console.log(response);
  return response.data.user;
};
