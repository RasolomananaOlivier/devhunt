import axios from "axios";
import { endpoint } from "src/constants/endpoint";
import { apiV1 } from "src/constants/baseUrl";

const register = async (user) => {
  console.log("====================================");
  console.log("called");
  console.log("====================================");
  const res = await axios.post(apiV1 + endpoint.auth.REGISTER, user);
  return res.data;
};

const login = async (user) => {
  const res = await axios.post(apiV1 + endpoint.auth.LOGIN, user);
  return res.data;
};

const authenticated = async (token) => {
  const res = await axios.post(apiV1 + endpoint.auth.VERIFY_TOKEN, token);
  return res.data;
};

const User = {
  register,
  login,
  authenticated,
};

export default User;
