import { createContext } from "react";

export interface UserContextType {
  fullName: string; 
  phone: string; 
  email: string;
  gender: string; 
  nationalCode: string; 
  avatarSrc: string; 
}
export interface UserContextValue {
  user: UserContextType;
  setUser: (user: UserContextType) => void;
}

export const UserContext = createContext<UserContextValue | null>(null);
