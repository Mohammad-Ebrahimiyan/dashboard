import React from "react";
import { Control, FieldErrors } from "react-hook-form";
import { UserProfileInputs } from "../../types/index"; 
import { UserProfileFieldRow } from "./UserProfileFieldRow"; 

interface Props {
  control: Control<UserProfileInputs>;
  errors: FieldErrors<UserProfileInputs>;
}

export const UserProfileFields: React.FC<Props> = ({ control, errors }) => {
  return (
    <>
      <UserProfileFieldRow
        control={control}
        errors={errors}
        fields={[
          { name: "fullName", label: "نام و نام خانوادگی" },
          { name: "phone", label: "شماره تماس" },
        ]}
      />

      <UserProfileFieldRow
        control={control}
        errors={errors}
        fields={[
          { name: "gender", label: "جنسیت" },
          { name: "nationalCode", label: "کدملی" },
        ]}
      />

      <UserProfileFieldRow
        control={control}
        errors={errors}
        fields={[
          { name: "email", label: "ایمیل" },
        ]}
      />
    </>
  );
};
