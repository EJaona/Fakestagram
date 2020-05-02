import React from "react";

const Options = (props) => (
  <div className="options">
    <i className="far fa-compass fa-2x" />
    <i className="far fa-heart fa-2x" /*onClick={props.displayLiked}*/ />
    <div className="user">
    <i className="far fa-user fa-2x" onClick={props.logOut} />
    <p>Logout</p>
    </div>
  </div>
);

export default Options;
