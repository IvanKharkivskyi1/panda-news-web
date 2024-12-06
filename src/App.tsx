import './App.css';
import { AppThemeProvider } from './store/contexts/AppThemeProvider/AppThemeProvider';
import { Router } from './components/router/Router';

function App() {
  return (
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  );
}

export default App;
