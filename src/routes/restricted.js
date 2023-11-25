import Protected from "./protected";
import Private from "./private";

/**
 * @breif Protected and restrict route to users of particular roles
 * @param {String} role Login user role
 * @param {JSX} children Childrem components
 * @returns {JSX}
 */
const Restricted = ({ role, children }) => {
  return (
    <Protected>
      <Private role={role}>{children}</Private>
    </Protected>
  );
};

export default Restricted;
