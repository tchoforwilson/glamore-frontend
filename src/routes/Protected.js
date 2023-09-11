import { Navigate } from "react-router-dom";
import authService from "../services/authService";

/**
 * @breif Protect this route, Users are required to be login
 * to access this route
 * @param {HTML} children -> Route Element
 * @returns {JSX}
 */
const Protected = ({ children }) => {
  const user = authService.getCurrentUser();
  return !user ? <Navigate to="/login" replace={true} /> : children;
};

export default Protected;
