import { AppThemeProvider, LanguageProvider } from '@/store';
import './App.css';
import { Router } from './components';

function App() {
  return (
    <AppThemeProvider>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </AppThemeProvider>
  );
}

export default App;
