import React from "react";
import { createRoot } from "react-dom/client";
import Movies_App from "./components/Movies_App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Movies_App />
  </React.StrictMode>
);
