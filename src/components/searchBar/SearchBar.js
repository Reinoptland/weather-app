import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  console.log("PROPS:", props);
  function search() {
    console.log(query);
  }
  return (
    <span className="searchbar">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
      />

      <button type="button" onClick={search}>
        Zoek
      </button>
    </span>
  );
}

export default SearchBar;
