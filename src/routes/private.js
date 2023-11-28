import { useSelector } from "react-redux";

/**
 * @breif Private route only for users of a particular role
 * @param {String} role -> Login user role
 * @param {HTML} children -> Element
 * @returns {null || HTML}
 */
const Private = ({ role, children }) => {
  const { user } = useSelector((state) => state.auth);
  return user?.role === role ? children : null;
};

export default Private;
