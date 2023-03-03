const get = () => {
  const token = localStorage.getItem("token");

  if (token === null) {
    // throw new Error("Token not found");
    return "";
  }
  return token;
};

const save = (token) => {
  localStorage.setItem("token", token);
};

const token = {
  get,
  save,
};
