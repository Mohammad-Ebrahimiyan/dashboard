import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserProvider } from './context/UserProvider'
import { ThemeProvider } from './context/ThemeContext';  
import { lightTheme  } from './styles/theme/theme.ts'; 
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'; 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
      <MuiThemeProvider theme={lightTheme}>
    <App />
    </MuiThemeProvider>
    </UserProvider>
    </ThemeProvider>

  </StrictMode>,
)
