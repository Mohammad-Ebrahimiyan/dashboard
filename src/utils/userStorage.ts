import { User } from "../types/user";
import { users as defaultUsers } from '../data/users'

const STORAGE_KEY = "fitland_users";


export const getUsers = (): User[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers)); 
    return defaultUsers;
  }
  return JSON.parse(data);
};


export const addUser = (user: Omit<User, "id">): { success: boolean; message: string } => {
  const users = getUsers();

  const exists = users.some((u) => u.phone === user.phone); 
  if (exists) return { success: false, message: "شماره موبایل قبلاً ثبت شده است." };

  const newUser: User = { 
    ...user, 
    id: users.length + 1, 
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...users, newUser])); 

  return { success: true, message: "کاربر با موفقیت ثبت شد." };
};
