import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("cheese");
  return (
    <span className="searchbar">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
      />

      <button type="button">Zoek</button>
    </span>
  );
}

export default SearchBar;
