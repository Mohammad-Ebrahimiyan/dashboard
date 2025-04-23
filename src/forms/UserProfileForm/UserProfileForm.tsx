import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../UserProfileForm/UserProfileFormSchema";
import { UserProfileInputs } from "../../types"; 
import { Box, Paper, Snackbar, Alert } from "@mui/material";
import { useUser } from "../../context/useUser"; 
import { UserProfileFormContent } from "../UserProfileFields/UserProfileFormContent"; 
import { UserProfileDisplay } from "./UserProfileDisplay";


export const UserProfileForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [submitted, setSubmitted] = useState(false); 
  const { setUser } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserProfileInputs>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: UserProfileInputs) => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        gender: data.gender,
        nationalCode: data.nationalCode,
        avatarSrc: "/your-avatar.webp",});
      setLoading(false);
      setOpenSnackbar(true);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <Box sx={{ width: "100vw", height: "53vh", display: "flex", justifyContent: "flex-end", marginTop: "50px" }}>
      <Paper elevation={2} sx={{ p: 2, borderRadius: 5, direction: "rtl", width: "100%", maxWidth: 900 }}>
      {submitted ? (
          <UserProfileDisplay /> 
        ) : (
          <UserProfileFormContent
            control={control}
            errors={errors}
            isValid={isValid}
            onSubmit={onSubmit}
            loading={loading}
            handleSubmit={handleSubmit} 
          />
        )}
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert severity="success" sx={{ width: "100%" }}>
            اطلاعات با موفقیت ثبت شد ✅
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};
