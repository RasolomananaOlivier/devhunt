import { useEffect, useState } from "react";

const useToken = () => {
  const [token, settoken] = useState({ get: () => {}, save: () => {} });

  useEffect(() => {
    settoken({
      get: () => localStorage.getItem("token"),
      save: () => localStorage.setItem("token", token),
    });
  }, []);

  return token;
};

export default useToken;
