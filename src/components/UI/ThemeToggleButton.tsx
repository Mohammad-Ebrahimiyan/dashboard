import { IconButton,Tooltip  } from "@mui/material";
import { Brightness7 as Brightness7Icon, Brightness4 as Brightness4Icon } from "@mui/icons-material";
import { useThemeContext } from "../../context/useTheme"; 
import { styled } from "@mui/material/styles";

export function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={isDarkMode?'حالت روشن': 'حالت تیره'} arrow>
    <StyledIconButton onClick={toggleTheme}>
    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
  </StyledIconButton>
  </Tooltip>
  );
}


const StyledIconButton = styled(IconButton)(({ theme }) => ({
    marginLeft: "15px",
    color: theme.palette.mode === "dark" ? "#f4511e" : "#424242",
  }));