export let baseURL = "http://localhost:5000";

if (process.env.NODE_ENV === "production") {
  baseURL = "https://quicktalks-server.up.railway.app";
}

export const apiV1 = baseURL + "/api/v1";
