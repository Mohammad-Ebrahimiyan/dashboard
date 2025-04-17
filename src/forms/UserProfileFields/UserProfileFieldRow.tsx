import React from "react";
import { Box, TextField } from "@mui/material";
import { Controller, Control, FieldErrors, Path } from "react-hook-form";
import { UserProfileInputs } from "../../types/index";

interface FieldRowProps {
  fields: { name: Path<UserProfileInputs>; label: string }[];
  control: Control<UserProfileInputs>;
  errors: FieldErrors<UserProfileInputs>;
}

const getErrorProps = (name: Path<UserProfileInputs>, errors: FieldErrors<UserProfileInputs>) => {
  const error = errors[name];
  return {
    error: !!error,
    helperText: error?.message,
  };
};

export const UserProfileFieldRow: React.FC<FieldRowProps> = ({ fields, control, errors }) => {
  return (
    <Box display="flex" gap={2} mb={3} alignItems="center">
      {fields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: controllerField }) => (
            <TextField
              {...controllerField}
              label={field.label}
              fullWidth
              {...getErrorProps(field.name, errors)}
            />
          )}
        />
      ))}
    </Box>
  );
};
