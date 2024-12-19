import { AppThemeProvider, LanguageProvider } from '@/store';
import { store } from '@/store/slices/store';
import { Provider } from 'react-redux';
import './App.css';
import { Router } from './components';

function App() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <LanguageProvider>
          <Router />
        </LanguageProvider>
      </AppThemeProvider>
    </Provider>
  );
}

export default App;
