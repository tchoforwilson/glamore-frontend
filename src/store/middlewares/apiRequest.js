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

    // 1. when the api call starts we dispatch the on start action
    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const res = await axios.request({
        baseURL: BASE_URL,
        url,
        method,
        data,
        headers: { Authorization: `Bearer ${authService.getJwt()}` },
      });
      // 2. Whene the api call succeeds we dispace the response data
      dispatch(actions.apiCallSuccess(res.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: res.data });
    } catch (error) {
      // 3. When api call fails we dispatch the error
      dispatch(actions.apiCallFailed(error.response.data));
      if (onError) dispatch({ type: onError });
    }
  };

export default apiRequest;
