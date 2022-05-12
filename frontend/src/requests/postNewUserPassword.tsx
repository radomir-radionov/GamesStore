import axios from "axios";
import dataServer from "constants/data";

export const postNewUserPassword = async (
  newPassword: string,
  currentUser: string
) => {
  const response = await axios.post(dataServer.CHANGEPASSWORD, {
    currentUser,
    newPassword,
  });
  return response.data.user;
};
