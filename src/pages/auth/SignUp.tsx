import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  FormControlLabel,
  Paper,
  Alert,
} from "@mui/material";
import { addUser } from "../../utils/userStorage"; 
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(""); 
  const [nationalCode, setNationalCode] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !gender || !nationalCode || !accepted) {
      setError("لطفاً همه فیلدهای اجباری را تکمیل کرده و قوانین را بپذیرید.");
      return;
    }

    const result = addUser({
      fullName,
      phone,
      email,
      gender,
      nationalCode,
      avatarSrc: "/default-avatar.jpg",
    });

    if (!result.success) {
      setError(result.message); 
      return;
    }

    setError(null);
    navigate("/");
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4 }}>
        <Typography variant="h5" align="right" fontWeight="bold" mb={3}>
          ثبت‌نام
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            label="نام و نام خانوادگی *"
            fullWidth
            placeholder="نام خود را وارد کنید"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            label="شماره تلفن همراه *"
            fullWidth
            placeholder="09*********"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <TextField
            label="ایمیل (اختیاری)"
            fullWidth
            placeholder="Example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="جنسیت"
            fullWidth
            placeholder="مرد / زن"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />

          <TextField
            label="کد ملی"
            fullWidth
            placeholder="کد ملی خود را وارد کنید"
            value={nationalCode}
            onChange={(e) => setNationalCode(e.target.value)}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
              />
            }
            label={
              <Typography variant="body2" sx={{ direction: "rtl" }}>
                قوانین و <span style={{ color: "#1565c0" }}>مقررات</span> را
                خوانده و قبول دارم.
              </Typography>
            }
            sx={{ alignSelf: "start", mt: 1 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="warning"
            size="large"
            sx={{ fontWeight: "bold", mt: 2, borderRadius: 2 }}
          >
            تایید
          </Button>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
