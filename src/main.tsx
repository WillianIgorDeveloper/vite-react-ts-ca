import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// ---- Pages
// Public
import { HomePage } from "@/presentation/pages/public/home";
import { NotFoundPage } from "@/presentation/pages/public/notfound";
// Only Public
import { OnlyPublicRoutes } from "@/middleware/onlyPublicRoutes";
import { SignInPage } from "./presentation/pages/public/auth/signin";
import { SignUpPage } from "./presentation/pages/public/auth/signup";
// Private
import { PrivateRoutes } from "@/middleware/privateRoutes";
import { AppPage } from "./presentation/pages/private/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<OnlyPublicRoutes />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="app" element={<AppPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
