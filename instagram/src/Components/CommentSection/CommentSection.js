import React, { Component } from "react";
import Form from "./CommentForm";
import Moment from "moment";

class CommentSection extends Component {
  state = {
    comments: [],
    text: "",
    username: "Guest_User"
  };

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  addNewComment = (e, index) => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.text,
          username: this.state.username
        }
      ],
      comment: ""
    });
  };

  render() {
    return (
      <div className="comment">
        {this.state.comments.map(item => {
          return (
            <p>
              <span style={{ fontWeight: "bold" }}>{item.username}</span>{" "}
              {item.text}
            </p>
          );
        })}
        <p> {Moment("20170710").fromNow()}</p>
        <hr />
        <Form
          comment={this.state.comment}
          handleChange={this.handleChange}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default CommentSection;
