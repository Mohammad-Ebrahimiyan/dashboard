import { createContext } from "react";

export interface UserContextType {
  name: string;
  email: string;
  avatarSrc: string;
}

export interface UserContextValue {
  user: UserContextType;
  setUser: (user: UserContextType) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);
