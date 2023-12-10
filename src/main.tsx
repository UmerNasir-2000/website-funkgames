import '@fontsource/poppins/400.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './store';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
