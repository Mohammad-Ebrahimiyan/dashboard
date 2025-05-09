import React, { useState } from "react";
import { useUser } from "../../context/useUser";
import avatarSrc from "../../assets/images/Ellipse3758.webp";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import { getUsers } from "../../utils/userStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser } = useUser();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = getUsers();
    const foundUser = users.find((user) => user.phone === phone);

    if (!foundUser) {
      setError("کاربری با این شماره یافت نشد.");
      return;
    }

    localStorage.setItem("current_user", JSON.stringify(foundUser));
    setUser({
      fullName: foundUser.fullName,
      phone: foundUser.phone,
      email: foundUser.email || "",
      gender: foundUser.gender || "نامشخص",
      nationalCode: foundUser.nationalCode || "0000000000",
      avatarSrc: avatarSrc,
    });
    setError(null);
    navigate("/");
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" align="center" mb={3} fontWeight="bold">
          ورود
        </Typography>

        <Box
          component="form"
          onSubmit={handleLogin}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            label="شماره تلفن"
            placeholder="مثلاً: 09123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary">
            ورود
          </Button>

          {error && <Alert severity="error">{error}</Alert>}
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
