import { Navigate, Outlet } from "react-router-dom";

export function OnlyPublicRoutes() {
  return true ? <Outlet /> : <Navigate to="/app" replace={true} />;
}
