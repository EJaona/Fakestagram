import React, { Component } from "react";
import Search from "../SearchBar/SearchContainer";
import Post from "./PostContainer";
import Data from "../../dummy-data";
import "../../App.css";

class PostsPage extends Component {
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
    if (this.state.search === null) {
      this.setState({
        display: this.state.display,
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

export default PostsPage;
