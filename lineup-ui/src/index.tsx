import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './globalStyles/colors';
import { GlobalStyle } from './globalStyles/global';

ReactDOM.render(

    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);

