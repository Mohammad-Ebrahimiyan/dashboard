import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UserProvider } from './context/UserProvider'
import { ThemeProvider } from './context/ThemeProvider.tsx';  
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { AppThemeProvider } from './styles/theme/AppThemeProvider.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AppThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
    </AppThemeProvider>
    </ThemeProvider>

  </StrictMode>,
)
