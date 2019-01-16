import React from "react";
import Logo from "./HeaderLogo";
import SearchBar from "./SearchBar";
import Options from "./Options";
import "./Header.css";

const SearchContainer = () => (
  <div className="search-container">
    <Logo />
    <SearchBar />
    <Options />
  </div>
);

export default SearchContainer;
