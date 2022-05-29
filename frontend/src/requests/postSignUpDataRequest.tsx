import axios from "axios";
import dataServer from "constants/data";

const postSignUpDataRequest = async (
  email: string,
  name: string,
  password: string,
  role = null
) => {
  const response = await axios.post(`${dataServer.REGISTRATION}`, {
    email,
    name,
    password,
    role,
  });
  return response.data.user;
};

export default postSignUpDataRequest;
