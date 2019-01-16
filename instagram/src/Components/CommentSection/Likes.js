import React, { Component } from "react";

class PostLikes extends Component {
  state = {
    likes: this.props.likes
  };

  addLikes = () => {
    this.setState({
      likes: ++this.state.likes
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="likes">
          <i className="far fa-heart fa-lg" onClick={this.addLikes} />
          <div className="comment-logo">
            <i className="far fa-comment fa-lg" />
          </div>
        </div>
        <p className="likes-counter" style={{ fontWeight: "bold" }}>
          {" "}
          {this.state.likes} likes
        </p>
      </React.Fragment>
    );
  }
}

export default PostLikes;
