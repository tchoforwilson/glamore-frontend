import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { AppInput } from "../inputs";

/**
 * @breif Render a search input form
 * @param {string} placeholder The placeholder
 * @param {Function} onChange Handle search input change
 * @returns {JSX}
 */
const SearchWidgetInput = ({ placeholder = "Search", onChange }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onChange(e.target.value);
  };

  return (
    <form>
      {query === "" ? (
        <SearchOutlinedIcon className="search-widget__icon" />
      ) : (
        <CloseOutlinedIcon
          className="search-widget__icon"
          onClick={() => setQuery("")}
        />
      )}
      <AppInput
        name="name"
        type="text"
        placeholder={placeholder}
        value={query}
        className="search-widget__input"
        autocomplete="off"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchWidgetInput;
