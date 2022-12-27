import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/style/utils.scss";
import App from "./view/App";

import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root"));

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
