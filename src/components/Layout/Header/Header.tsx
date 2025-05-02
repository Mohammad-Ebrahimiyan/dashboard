import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import SearchSection from "./SearchSection";
import CategorySection from "./CategorySection";
import { ThemeToggleButton } from "../../UI/ThemeToggleButton";

const StyledAppBar = styled(AppBar)(({theme}) => ({
  "&.MuiAppBar-root": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
  },
  position: "relative",
  borderRadius: 16,
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "16px",
});

const StyledTypo = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main,
}));

const Header = () => {
  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <Box>
            <IconButton>
              <ShoppingBagOutlinedIcon sx={{ color: "#f4511e" }} />
            </IconButton>
            <IconButton>
              <PersonOutlineIcon />
              <KeyboardArrowDownIcon />
            </IconButton>
            <ThemeToggleButton />
          </Box>

          <SearchSection />

          <Box textAlign="right">
            <StyledTypo variant="h5"  fontWeight="bold">
              FitLand
            </StyledTypo>
            <StyledTypo variant="caption" color="text.secondary">
              فروشگاه لوازم ورزشی فیت لند
            </StyledTypo>
          </Box>
        </StyledToolbar>
      </StyledAppBar>

      <CategorySection />
    </>
  );
};

export default Header;
