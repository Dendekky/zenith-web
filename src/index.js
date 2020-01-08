import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import { ThemeProvider } from "@chakra-ui/core";

// Use at the root of your app
{/* <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>; */}

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);