import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_TOKEN}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
