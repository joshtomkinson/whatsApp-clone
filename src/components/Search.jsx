import React from "react";

const Search = ({ search, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
