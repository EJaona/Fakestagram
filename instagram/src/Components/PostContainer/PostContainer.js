import React from "react";
import Header from "./PostHeader";
import PostBody from "./PostBody";
import Comments from "../CommentSection/CommentContainer";
import PropTypes from "prop-types";
import "./Post.css";

const PostContainer = props => (
  <React.Fragment>
    {props.list.map(post => (
      <div className="post-container">
        <Header thumbNail={post.thumbnailUrl} username={post.username} />
        <PostBody img={post.imageUrl} />
        <Comments likes={post.likes} comments={post.comments} />
      </div>
    ))}
  </React.Fragment>
);

PostContainer.propTypes = {
  posts: PropTypes.array
};

export default PostContainer;
