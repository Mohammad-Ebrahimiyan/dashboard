import { Typography, Box } from "@mui/material";
import { useUser } from "../../context/useUser";

export const UserProfileDisplay = () => {
  const { user } = useUser();

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 4,
        p: 3,
        mt: 2,
        direction: "rtl",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        حساب کاربری •
      </Typography>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
        <Box>
          <Typography color="text.secondary">نام و نام خانوادگی</Typography>
          <Typography>{user.fullName}</Typography>

          <Typography color="text.secondary" mt={2}>کد ملی</Typography>
          <Typography>{user.nationalCode}</Typography>

          <Typography color="text.secondary" mt={2}>ایمیل</Typography>
          <Typography>{user.email}</Typography>
        </Box>

        <Box>
          <Typography color="text.secondary">شماره تماس</Typography>
          <Typography>{user.phone}</Typography>

          <Typography color="text.secondary" mt={2}>جنسیت</Typography>
          <Typography>{user.gender}</Typography>
        </Box>
      </Box>
    </Box>
  );
};