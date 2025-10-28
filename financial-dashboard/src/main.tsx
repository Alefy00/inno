import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { AuthProvider } from "./context/AuthProvider";
import { TransactionsProvider } from "./context/TransactionsProvider";
import { FiltersProvider } from "./context/FiltersProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <TransactionsProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </TransactionsProvider>
    </AuthProvider>
  </React.StrictMode>
);
