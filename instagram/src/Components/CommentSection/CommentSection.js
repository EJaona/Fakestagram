import React, { Component } from "react";
import Form from "./CommentForm";
import Moment from "moment";

class CommentSection extends Component {
  state = {
    comments: this.props.comments,
    text: "",
    username: " "
  };

  // componentDidMount() {
  //   this.setState({
  //     comments: this.props.comments
  //   });
  // }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.text,
          username: localStorage.getItem("username")
        }
      ],
      text: ""
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
          comment={this.state.text}
          handleChange={this.handleChange}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default CommentSection;
