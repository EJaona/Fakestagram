import React from "react";
import PropTypes from "prop-types";

const PostBody = props => (
  <div className="post-body">
    <img src={props.img} />
  </div>
);

PostBody.propTypes = {
  img: PropTypes.string
};

export default PostBody;
