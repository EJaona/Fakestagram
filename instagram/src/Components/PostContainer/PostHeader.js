import React from "react";
import PropTypes from "prop-types";

const PostHeader = props => (
  <div className="post-header">
    <img src={props.thumbNail} />
    <p style={{ fontWeight: "bold" }}> {props.username} </p>
  </div>
);

PostHeader.propTypes = {
  thumbNail: PropTypes.string,
  username: PropTypes.string
};

export default PostHeader;
