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

//   handleSearchInput = e => {
//     this.setState({
//       search: e.target.value
//     });
//   };

handleSearchInput = e => {
    this.setState({
      search: e.target.value,
      display: this.state.list.filter(post => post.username.includes(e.target.value))
    });
  };



  displayLiked = () => {
      this.setState({
          display: this.state.list.filter(post => post.liked)
      })
  }

  logOut = () => {
      localStorage.clear()
      window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <Search
          logOut={this.logOut}
          handleSearchInput={this.handleSearchInput}
          searchFilter={this.searchFilter}
          search={this.state.search}
          displayLiked={this.displayLiked}
        />{" "}
        <Post list={this.state.display} toggleLiked={this.toggleLiked} />
      </div>
    );
  }
}

export default PostsPage;
