import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../styles/modern-normalize.css";
import "../styles/index.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/feature.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
