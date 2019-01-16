import React, { Component } from "react";
import Search from "./Components/SearchBar/SearchContainer";
import Post from "./Components/PostContainer/PostContainer";
import Data from "./dummy-data";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    display: [],
    search: ""
  };

  componentDidMount = () => {
    this.setState({
      list: Data,
      display: Data
    });
  };

  handleSearchInput = e => {
    this.setState({
      search: e.target.value
    });
  };

  searchFilter = e => {
    e.preventDefault();
    if (this.state.search === "all") {
      this.setState({
        display: this.state.list,
        search: ""
      });
    } else {
      this.setState({
        display: this.state.list.filter(item =>
          item.username.includes(this.state.search)
        ),
        search: ""
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Search
          handleSearchInput={this.handleSearchInput}
          searchFilter={this.searchFilter}
          search={this.state.search}
        />{" "}
        <Post list={this.state.display} />
      </div>
    );
  }
}

export default App;
