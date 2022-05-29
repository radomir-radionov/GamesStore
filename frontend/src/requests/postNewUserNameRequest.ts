import axios from "axios";
import dataServer from "constants/data";

const postNewUserNameRequest = async (name: string, currentUser: any) => {
  const response = await axios.post(`${dataServer.SAFEPROFILE}`, {
    currentUser,
    name,
  });
  return response.data.user;
};

export default postNewUserNameRequest;
