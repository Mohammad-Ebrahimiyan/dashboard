import { UserProfileForm } from "../../forms/UserProfileForm/UserProfileForm";
import Header from "./Header/Header";
import Sidebar from "./Sidebar";
import { Box, styled } from "@mui/material";
// import UserList from "../UI/UserList";

const LayoutContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  display: "flex",
  flexDirection: "row-reverse",
  backgroundColor: theme.palette.background.default,
  // minHeight: "100vh"
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
}));

const LayoutWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Sidebar />
        {/* <Box sx={{ flex: 1, p: 2 }}> */}
          {/* اینجا لیست کاربران را نمایش می‌دهیم */}
          {/* <UserList /> */}
        {/* </Box> */}
        <MainContent>{children}</MainContent>
        <UserProfileForm />
      </LayoutContainer>
    </>
  );
};

export default LayoutWrapper;
