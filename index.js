import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
