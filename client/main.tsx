import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./global.css"; // or wherever your global styles are

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
