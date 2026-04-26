import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter } from 'react-router';
import { DefaultLayout } from './components/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </BrowserRouter>
  </StrictMode>,
);
