// src/pages/users/UsersList.tsx
import { useEffect, useState } from "react";
import { getUsers } from "../../utils/userStorage";
import { User } from "../../types/user";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loaded = getUsers();
    setUsers(loaded);
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2}>
          لیست کاربران ثبت‌نام‌شده
        </Typography>
        <List>
          {users.map((user) => (
            <div key={user.id}>
              <ListItem>
                <ListItemText
                  primary={user.fullName}
                  secondary={`📞 ${user.phone} | 📧 ${user.email || "ندارد"}`}
                  sx={{ textAlign: "right" }}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UsersList;
