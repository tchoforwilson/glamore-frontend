import jwtDecode from "jwt-decode";
import { getCookie } from "../utilities/cookies";

/**
 * @breif get the current token string
 * @returns {string}
 */
const getJwt = () => {
  if (localStorage.token || getCookie("token")) {
    return localStorage.token || getCookie("token");
  }
  return null;
};

/**
 * @breif Get the token from the localstorage or cookie, decode to get user credentials. If there
 * is an error or no token, return null
 * @returns {Object} user
 */
const getCurrentUser = () => {
  try {
    const jwt = localStorage.token || getCookie("token");
    const { user } = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getJwt,
  getCurrentUser,
};
