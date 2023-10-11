import Protected from "./Protected";
import Private from "./Private";

/**
 * @breif Protected and restrict route to users of particular roles
 * @param {String} role Login user role
 * @param {JSX} children Childrem components
 * @returns {JSX}
 */
const ProtectedPrivate = ({ role, children }) => {
  return (
    <Protected>
      <Private role={role}>{children}</Private>
    </Protected>
  );
};

export default ProtectedPrivate;
