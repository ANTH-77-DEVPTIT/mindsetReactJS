import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import products from "./productsData";

//khi render lần đầu thì ta đưa data và local luôn.
document.addEventListener("DOMContentLoaded", function () {
  localStorage.setItem("products", JSON.stringify(products));
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
