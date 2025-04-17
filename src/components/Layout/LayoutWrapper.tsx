import { UserProfileForm } from "../../forms/UserProfileForm/UserProfileForm";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const LayoutWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />

      <Box
        sx={{
          position:'sticky',
          display: "flex",
          flexDirection: "row-reverse", 
        }}
      >
        
        <Sidebar />

        <Box sx={{ flex: 1, p: 2 }}>
          {children}
        </Box>
        <UserProfileForm />
      </Box>
    </>
  );
};

export default LayoutWrapper;
