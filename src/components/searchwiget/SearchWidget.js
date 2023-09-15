import React, { useContext, useState } from "react";
import axios from "axios";
import { SearchURLContext } from "../../context";
import SearchWidgetInput from "./SearchWidgetInput";
import SearchWidgetResultsList from "./SearchWidgetResultsList";

/**
 * @breif Render a search Form
 * @param {Function} onSearch Handler for search
 * @returns {JSX}
 */
const SearchWidget = ({ onSearch }) => {
  const { searchUrl } = useContext(SearchURLContext);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = async (value) => {
    setQuery(value);
    const res = await axios.request(`${searchUrl}/search/${query}`);
    setResults(res.data);
  };

  const handleItemClick = (item) => {
    setQuery(item.name);
    onSearch(item.name);
  };

  return (
    <div className="search-widget">
      <SearchWidgetInput onChange={handleChange} />
      <SearchWidgetResultsList
        results={results}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default SearchWidget;
