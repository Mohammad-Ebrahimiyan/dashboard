import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T[]>(this.endpoint, config).then((res) => res.data);

  get = (id: number) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);

  create = (data: T) =>
    axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);

  update = (id: number, data: Partial<T>) =>
    axiosInstance.patch<T>(`${this.endpoint}/${id}`, data).then((res) => res.data);

  delete = (id: number) =>
    axiosInstance.delete(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default APIClient;
export { axiosInstance };
