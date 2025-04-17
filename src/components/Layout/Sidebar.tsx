import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfileSection from "./ProfileSection";
import MenuSection from "./MenuSection";


const SidebarContainer = styled(Box)(({ theme }) => ({
  height: "72vh",
  width: "16vw",
  background: theme.palette.background.paper,
  borderRadius: "16px",
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
  direction: "rtl",
  margin: "50px 100px 0 0",
}));

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ProfileSection />
      <MenuSection />
    </SidebarContainer>
  );
};

export default Sidebar;
