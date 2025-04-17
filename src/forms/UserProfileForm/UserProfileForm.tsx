import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../UserProfileForm/UserProfileFormSchema";
import { UserProfileInputs } from "../../types"; 
import { Box, Paper, Snackbar, Alert } from "@mui/material";
import { UserProfileFormContent } from "../UserProfileFields/UserProfileFormContent"; 

export const UserProfileForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
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
      console.log("فرم ارسال شد ✅", data);
      setLoading(false);
      setOpenSnackbar(true);
    }, 2000);
  };

  return (
    <Box sx={{ width: "100vw", height: "53vh", display: "flex", justifyContent: "flex-end", marginTop: "50px" }}>
      <Paper elevation={2} sx={{ p: 2, borderRadius: 5, direction: "rtl", width: "100%", maxWidth: 900 }}>
        <UserProfileFormContent
          control={control}
          errors={errors}
          isValid={isValid}
          onSubmit={onSubmit}
          loading={loading}
          handleSubmit={handleSubmit} 
        />
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert severity="success" sx={{ width: "100%" }}>
            اطلاعات با موفقیت ثبت شد ✅
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};
