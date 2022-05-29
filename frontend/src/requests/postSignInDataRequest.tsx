import axios from "axios";
import dataServer from "constants/data";

const postSignInDataRequestRequest = async (
  email: string,
  password: string
) => {
  const response = await axios.post(`${dataServer.LOGIN}`, {
    email,
    password,
  });
  return response.data.user;
};

export default postSignInDataRequestRequest;
