import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./api/store.js";
import { Provider } from "react-redux";
import { DataLayer } from "./hooks/ToggleContextProvider";
import reducer, { initailState } from "./hooks/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <DataLayer reducer={reducer} initialState={initailState}>
      <App />
      </DataLayer>
    </Provider>
  </React.StrictMode>
);
