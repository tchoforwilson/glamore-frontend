import { toast } from "react-toastify";
import { apiCallSuccess, apiCallFailed } from "../apiCall";

/**
 * @breif Show a toast notification
 * @param {Function} next Callback function
 * @param {Function} action Callback function
 * @returns  {JSX}
 */
const toastify = () => (next) => (action) => {
  // 1. Check dispatched action
  if (action.type !== apiCallSuccess.type && action.type !== apiCallFailed.type)
    return next(action);

  // 2. Check status and toast base on status
  const { status, statusCode } = action.payload;

  // 3. Toast for error messages i.e status code >= 500
  if (status === "error" && statusCode >= 500) {
    console.log(action.payload);
    toast.error(action.payload.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  // 4. Toast for success messages i.e 200<=status code<=204
  if (status === "success") {
    toast.success(action.payload.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  // 5. Call next middleware
  next(action);
};

export default toastify;
