import React from "react";
import { UserProfileField } from "./UserProfileField";  
import { UserProfileSubmit } from "../UserProfileSubmit/UserProfileSubmit"; 
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { UserProfileInputs } from "../../types/index"; 
import { Typography } from "@mui/material";

interface UserProfileFormContentProps {
  control: Control<UserProfileInputs>;
  errors: FieldErrors<UserProfileInputs>;
  isValid: boolean;
  loading: boolean;
  onSubmit: (data: UserProfileInputs) => void;
  handleSubmit: UseFormHandleSubmit<UserProfileInputs>; 
}

export const UserProfileFormContent: React.FC<UserProfileFormContentProps> = ({
  control,
  errors,
  isValid,
  loading,
  onSubmit,
  handleSubmit, 
}) => {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={3}>
        • حساب کاربری
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>  
        <UserProfileField control={control} errors={errors} />
        <UserProfileSubmit isValid={!isValid} loading={loading} />
      </form>
    </>
  );
};
