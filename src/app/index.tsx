import { BrowserRouter } from "react-router-dom";

import { Router } from "../pages";
import { ErrorBoundary } from "./errorBoundary/ErrorBoundary";

import "./utils/i18n";

import "./index.module.scss";

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
