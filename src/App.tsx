import './App.css';
import LayoutWrapper from './components/Layout/LayoutWrapper';
import { ErrorBoundary } from './components/UI/ErrorBoundary';
import { AppThemeProvider } from './styles/theme/AppThemeProvider';

function App() {
  return (
    <ErrorBoundary>
      <AppThemeProvider>
        <LayoutWrapper />
      </AppThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
