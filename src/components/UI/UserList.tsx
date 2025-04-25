import { Box, Button, Typography } from "@mui/material";
import { useUsers } from "../../hooks/useUsers";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
const UserList = () => {
  const { users, deleteUser, error } = useUsers();

  return (
    <Box sx={{ direction: "rtl" }}>
      <Typography variant="h6" mb={2}>
        لیست کاربران
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      {users.map((user) => (
        <Box
          key={user.id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
          p={1}
          bgcolor="background.paper"
          borderRadius={2}
        >
          <Typography>{user.name}</Typography>
          <Typography variant="body2" color={cssMainColors.secondary}>
            {user.email}
          </Typography>
          <Button variant="outlined" color="error" onClick={() => deleteUser(user.id)}>
            حذف
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default UserList;
