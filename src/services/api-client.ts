import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespnese<T> {
  count: number;
  results: T[];
}

const axiosInstances = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d031971bfb8e46bfaf27192d5fbc536d",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstances
      .get<FetchRespnese<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
