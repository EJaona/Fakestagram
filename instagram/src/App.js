import React, { Component } from "react";
import Search from "./Components/SearchBar/SearchContainer";
import Post from "./Components/PostContainer/PostContainer";
import Data from "./dummy-data";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    search: ""
  };

  componentDidMount = () => {
    this.setState({
      list: (this.state.list = Data)
    });
  };

  render() {
    return (
      <div className="App">
        <Search search={this.state.search} /> <Post list={this.state.list} />
      </div>
    );
  }
}

export default App;
