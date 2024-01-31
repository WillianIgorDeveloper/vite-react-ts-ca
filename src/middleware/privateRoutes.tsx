import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes() {
  return true ? <Outlet /> : <Navigate to="/signin" />;
}
