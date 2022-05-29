import axios from "axios";
import dataServer from "constants/data";

const postNewUserPasswordRequest = async (
  newPassword: string,
  currentUser: string
) => {
  const response = await axios.post(dataServer.CHANGEPASSWORD, {
    currentUser,
    newPassword,
  });
  return response.data.user;
};

export default postNewUserPasswordRequest;
