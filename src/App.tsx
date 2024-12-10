import './App.css';
import { Router } from './components/router/Router';
import { AppThemeProvider } from './store/contexts/AppThemeProvider/AppThemeProvider';

function App() {
  return (
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  );
}

export default App;
