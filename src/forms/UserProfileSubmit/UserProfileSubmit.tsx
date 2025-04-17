import React from "react";
import { Box, Button } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
// import { isValid } from "zod";

interface Props {
  isValid: boolean;
  loading: boolean;
}

export const UserProfileSubmit: React.FC<Props> = ({ isValid, loading }) => {
  return (
    <Box>
      <Button
        disabled={isValid || loading}
        variant="contained"
        color="warning"
        type="submit"
        sx={{
          px: 8,
          borderRadius: "8px",
          fontWeight: "bold",
          minWidth: "100px",
        }}
      >
        {loading ? <ClipLoader size={20} color="#fff" /> : "ثبت"}
      </Button>
    </Box>
  );
};
