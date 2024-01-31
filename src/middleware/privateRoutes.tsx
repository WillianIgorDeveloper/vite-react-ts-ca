import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes() {
  return false ? <Outlet /> : <Navigate to="/signin" replace={true} />;
}
