import APIClient from "./api-client";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  username?: string;
}

export default new APIClient<User>("/users");
