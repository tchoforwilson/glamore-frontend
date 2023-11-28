/**
 * @breif Create a search query name and value  from an object.
 * @param {Object} query Query object
 * @returns {String}
 */
export const createQuery = (query) => {
  const searchQuery = [];

  // Build query string
  Object.entries(query).forEach(([key, value]) => {
    if (value && value !== "-1") {
      searchQuery.push(`${key}=${value}`);
    }
  });
  // Join  the array into string with '&' separator
  return searchQuery.join("&");
};

/**
 * @breif A formatter for numbers
 */
export const numberFormatter = new Intl.NumberFormat();

/**
 * @breif Formatter for currency before displaying
 * @param {String} currency
 * @param {Number} value
 * @returns
 */
export const currencyFormatter = (currency, value) => {
  const minimumFractionDigits = currency === "USD" ? 2 : 0;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits,
  });
  return formatter.format(value);
};
