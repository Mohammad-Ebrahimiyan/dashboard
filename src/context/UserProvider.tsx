import React, { useState, useEffect } from "react";
import { UserContext, UserContextType, UserContextValue } from "./UserContext";
import avatarSrc from "../assets/images/Ellipse3758.webp";


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserContextType>({
    fullName: "مهسا شیرین زبان",
    phone: "09123456789", 
    email: "mahsashirinzaban751@gmail.com", 
    gender: "زن", 
    nationalCode: "0000000000", 
    avatarSrc: avatarSrc, 
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("current_user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser({
        fullName: parsed.fullName,
        phone: parsed.phone,
        email: parsed.email,
        gender: parsed.gender,
        nationalCode: parsed.nationalCode,
        avatarSrc: avatarSrc, 
      });
    }
  }, []);

  const value: UserContextValue = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
