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

  toggleLiked = (id) => {
      this.setState({
          list: this.state.list.map(post => {
              if (post.id === id){
                  return(
                      post.liked = !post.liked
                  )
              }
            return post;
          })
      })
     
  }

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
