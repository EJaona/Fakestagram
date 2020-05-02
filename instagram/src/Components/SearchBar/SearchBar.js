import React from "react";

const SearchBar = props => (
  <form onSubmit={props.searchFilter} className="search-form">
    <input
      type="text"
      placeholder="&#xF002; Search"
      style={{ textAlign: "center" }}
      value={props.search}
      onChange={props.handleSearchInput}
    />
  </form>
);

export default SearchBar;
