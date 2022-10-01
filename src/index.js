import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  colors: {
    font: "rgba(250,93,0,100%)",
    bg: "rgba(250,93,0,100%)",
    hover: "rgba(250,93,0,90%)",
    mdBgFrNav: "rgba(29,30,28,100%)",
  },
});
root.render(
  
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-xzublob3.us.auth0.com"
          clientId="d5SiIZXmj0YYRdbKei0GyZtpEcCNOUWh"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
