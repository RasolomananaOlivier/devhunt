import axios from "axios";
import { apiV1 } from "src/constants/baseUrl";

export const client = axios.create({ baseURL: apiV1 });
