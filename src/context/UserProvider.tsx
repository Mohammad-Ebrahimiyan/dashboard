import React, { useState } from "react";
import { UserContext, UserContextType, UserContextValue } from "./UserContext";
import avatarSrc from '../assets/images/Ellipse3758.webp'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserContextType>({
    name: "مهسا شیرین زبان",
    email: "mahsashirinzaban751@gmail.com",
    avatarSrc: avatarSrc,
  });

  const value: UserContextValue = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
