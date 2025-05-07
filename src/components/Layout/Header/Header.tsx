import { AppBar, Box, Grid, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchSection from "./SearchSection";
import CategorySection from "./CategorySection";
import { ThemeToggleButton } from "../../UI/ThemeToggleButton";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  "&.MuiAppBar-root": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none",
    marginTop: 12,
    padding: "12px 34px",
  },
  position: "relative",
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Header = () => {
  return (
    <>
      <StyledAppBar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Box sx={{marginLeft:10}}>
            <IconButton>
              <ShoppingBagOutlinedIcon sx={{ color: "#f4511e" }} />
            </IconButton>
            <IconButton>
              <PersonOutlineIcon />
              <KeyboardArrowDownIcon />
            </IconButton>
            <ThemeToggleButton />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SearchSection />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="right" marginRight={11}>
              <StyledTypo variant="h5" fontWeight="bold">
                FitLand
              </StyledTypo>
              <StyledTypo variant="caption" color="text.secondary">
                فروشگاه لوازم ورزشی فیت لند
              </StyledTypo>
            </Box>
          </Grid>
        </Grid>
      </StyledAppBar>
      <CategorySection />
    </>
  );
};

export default Header;
