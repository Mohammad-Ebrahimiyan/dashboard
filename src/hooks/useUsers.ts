import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    userService
      .getAll()
      .then((data) => setUsers(data))
      .catch(() => setError("خطا در دریافت لیست کاربران"));
  }, []);

  const addUser = (user: User) => setUsers((prev) => [...prev, user]);

  const deleteUser = (id: number) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  return {
    users,
    addUser,
    deleteUser,
    error,
  };
};
