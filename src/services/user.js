import { endpoint } from "src/constants/endpoint";
import { client } from "src/lib/client";

const register = async (user) => {
  const res = await client.post(endpoint.auth.REGISTER, user);
  return res.data;
};

const login = async (user) => {
  const res = await Client.post(endpoint.auth.LOGIN, user);
  return res.data;
};

const authenticated = async (token) => {
  const res = await client.post(endpoint.auth.VERIFY_TOKEN, token);
  return res.data;
};

const User = {
  register,
  login,
  authenticated,
};

export default User;
