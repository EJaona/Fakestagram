import React from "react";
import CommentSection from "./CommentSection";
import Likes from "./Likes";
import "./Comment.css";
import PropTypes from "prop-types";

const CommentContainer = props => (
  <div className="comment-container">
    <Likes likes={props.likes} />
    <div className="comments">
      <CommentSection comments={props.comments} />
    </div>
  </div>
);

CommentContainer.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.array,
  username: PropTypes.string,
  text: PropTypes.string
};

export default CommentContainer;
