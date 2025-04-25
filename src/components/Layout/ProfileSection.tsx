import { Avatar, Typography, Box } from "@mui/material";
import { useUser } from "../../context/useUser";

const ProfileSection = () => {
  const { user } = useUser(); 

  return (
    <Box textAlign="center" mb={2}>
      <Avatar src={user.avatarSrc} alt="profile" sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
      <Typography variant="subtitle1" fontWeight="bold">{user.fullName}</Typography>
      <Typography variant="body2" color="text.secondary">{user.email}</Typography>
    </Box>
  );
};

export default ProfileSection;
