import React from "react";

const HeaderLogo = () => (
  <a
    href="" //Currently refreshes page. Will adjust the rout to "Home" when we learn about routing
    className="logo"
    style={{ color: "black", textDecoration: "none" }}
  >
    <i className="fab fa-instagram fa-lg fa-2x" /> <h1>Instagram</h1>
  </a>
);

export default HeaderLogo;
