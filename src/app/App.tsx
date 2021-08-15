import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import appTheme from './AppTheme';
import MainPage from '../main/MainPage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as StoreProvider } from 'react-redux';
import appStore, { appPersistor } from './AppStore';

const App = () => {

  return (
  <BrowserRouter>
    
    <StoreProvider store={appStore}>

      <PersistGate loading={null} persistor={appPersistor}>

        <ThemeProvider theme={appTheme} >

          <CssBaseline />

          <MainPage />

        </ThemeProvider>
    
        </PersistGate>

      </StoreProvider>
    
    </BrowserRouter>
  );
}

export default App;