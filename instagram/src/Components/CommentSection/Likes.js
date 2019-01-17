import React, { Component } from "react";

class PostLikes extends Component {
  state = {
    likes: this.props.likes
  };

  addLikes = e => {
    e.target.classList.toggle("liked");

    if (e.target.className.includes("liked")) {
      this.setState(prevState => ({
        likes: ++prevState.likes
      }));
    } else {
      this.setState(prevState => ({ likes: --prevState.likes }));
    }
  };

  commentInputFocus = e => {
    document.querySelector(".comment-input").focus();
  };

  render() {
    return (
      <React.Fragment>
        <div className="likes">
          <i className="far fa-heart fa-lg" onClick={this.addLikes} />
          <div className="comment-logo">
            <i
              className="far fa-comment fa-lg"
              onClick={this.commentInputFocus}
            />
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
