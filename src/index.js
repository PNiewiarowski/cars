import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./reducers";
import App from "./app";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);