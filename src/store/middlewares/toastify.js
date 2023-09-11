import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Configure the toast
//toast.configure();

const toastify = (state) => (next) => (action) => {
  if (action.type === "error") {
    if (action.payload.statusCode >= 500) {
      toast.error(action.payload.message);
    } else {
      toast.done(action.payload.message);
    }
  } else {
    next(action);
  }
};

export default toastify;
