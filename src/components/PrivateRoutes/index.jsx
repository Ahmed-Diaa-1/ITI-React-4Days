import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoutes() {
  const location = useLocation();
  const isLoggedIn = true;

  return !isLoggedIn ? (
    <Navigate to='/login' state={{ from: location }} />
  ) : (
    <Outlet />
  );
}
