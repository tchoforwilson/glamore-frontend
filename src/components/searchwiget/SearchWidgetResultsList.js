import React from "react";

/**
 * @breif Render search results
 * @param {Array} results Search results
 * @param {Function} onItemClick Handler when a search item is clicked
 * @returns {JSX}
 */
const SearchWidgetResultsList = ({ results, onItemClick }) => {
  const handleItemClick = (item) => {
    onItemClick(item);
  };
  return (
    <ul className="search-widget-results-list">
      {results.map((result) => (
        <li
          className="search-widget-results-list__item"
          key={result.id}
          onClick={() => handleItemClick(result)}
        >
          {result.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchWidgetResultsList;
