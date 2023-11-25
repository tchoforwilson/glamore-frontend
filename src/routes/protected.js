import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @breif Protect this route, Users are required to be login
 * to access this route
 * @param {HTML} children -> Route Element
 * @returns {JSX}
 */
const Protected = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  return !isAuthenticated ? (
    <Navigate to="/login" from={location} replace />
  ) : (
    <Outlet />
  );
};

export default Protected;
