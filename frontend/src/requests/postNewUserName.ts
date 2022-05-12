import axios from "axios";
import dataServer from "constants/data";

export const postNewUserName = async (name: string, currentUser: any) => {
  const response = await axios.post(`${dataServer.SAFEPROFILE}`, {
    currentUser,
    name,
  });
  return response.data.user;
};
