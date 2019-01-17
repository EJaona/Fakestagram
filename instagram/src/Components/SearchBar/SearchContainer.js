import React from "react";
import Logo from "./HeaderLogo";
import SearchBar from "./SearchBar";
import Options from "./Options";
import "./Header.css";

const SearchContainer = props => (
  <div className="search-container">
    <Logo />
    <SearchBar
      search={props.search}
      searchFilter={props.searchFilter}
      handleSearchInput={props.handleSearchInput}
    />
    <Options displayLiked={props.displayLiked} logOut={props.logOut} />
  </div>
);

export default SearchContainer;
