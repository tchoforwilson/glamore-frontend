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
