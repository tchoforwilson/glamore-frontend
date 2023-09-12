import axios from "axios";
import { authService } from "../../services";
import { BASE_URL } from "../../configurations/config";
import * as actions from "../apiCall";

const apiRequest =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const res = await axios.request({
        baseURL: BASE_URL,
        url,
        method,
        data,
        headers: { authorization: `Bearer ${authService.getJwt()}` },
      });
      dispatch(actions.apiCallSuccess(res.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
    } catch (error) {
      if (
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      ) {
        console.log(error.response);
        const data = {
          message:
            error.response.data.message || error.message || error.toString(),
          status: error.response.data.status || error.status,
        };
        dispatch(actions.apiCallFailed(data));
        if (onError) dispatch({ type: onError, payload: error.response.data });
      }
    }
  };

export default apiRequest;
