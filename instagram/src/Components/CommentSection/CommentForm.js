import React from "react";
import Menu from "./CommentMenu";

const CommentForm = props => (
  <form className="comment-form" onSubmit={props.addNewComment}>
    <input
      className="comment-input"
      type="text"
      value={props.comment}
      placeholder="Add a comment..."
      onChange={props.handleChange}
    />
    <Menu />
  </form>
);

export default CommentForm;
