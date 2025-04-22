import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { useThemeContext } from "../../context/useTheme";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: Props) => {
  const { isDarkMode } = useThemeContext();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
