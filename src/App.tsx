import { CssBaseline } from '@mui/material';
import './App.css';
import LayoutWrapper from './components/Layout/LayoutWrapper';
import { ErrorBoundary } from './components/UI/ErrorBoundary';
import { ThemeToggleButton } from "./components/UI/ThemeToggleButton"; 
import { useThemeContext } from "./context/useTheme"; 
import { lightTheme, darkTheme } from './styles/theme/theme'; 
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'; 

function App() {
  const { isDarkMode } = useThemeContext(); 
  return (
    <ErrorBoundary>
      <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline /> {/* برای ریست استایل و اعمال تم MUI */}
        <ThemeToggleButton />
        <LayoutWrapper />
      </MuiThemeProvider>
    </ErrorBoundary>
  );
  
}

export default App;
