/**
 * @breif  A simple logger middleware functions that logs api parameters
 */

const logger = (param) => (next) => (action) => {
  console.log("Logging", param);
  next(action);
};

export default logger;
