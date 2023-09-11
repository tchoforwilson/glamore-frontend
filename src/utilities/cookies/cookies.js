import Cookies from "js-cookie";
/**
 * @breif Set a new cookie variable
 * @param {String} name Cookie name
 * @param {Any} value Cookie value
 * @param {Any} options Other cookie options
 */
export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, options);
};

/**
 * @breif Get cookie by it name
 * @param {String} name Cookie name
 * @returns {Any}
 */
export const getCookie = (name) => {
  return Cookies.get(name);
};

/**
 * @breif Remove cookie by it name
 * @param {String} name Cookie name
 */
export const removeCookie = (name) => {
  Cookies.remove(name);
};
