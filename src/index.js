import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById('root'))
const theme = extendTheme({
  colors: {
    font:'rgba(250,93,0,100%)',
    bg:"rgba(250,93,0,100%)",
    hover:'rgba(250,93,0,90%)',
    mdBgFrNav:'rgba(29,30,28,100%)'
  },
})
root.render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
