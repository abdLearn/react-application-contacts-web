import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextContactProvider } from "./context/ContextContact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextContactProvider>
      <App />
    </ContextContactProvider>
  </React.StrictMode>
);
