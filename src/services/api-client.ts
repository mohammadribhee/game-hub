import axios from "axios";

export interface FetchRespnese<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d031971bfb8e46bfaf27192d5fbc536d",
  },
});
