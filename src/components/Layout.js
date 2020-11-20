import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

import "../index.css";

const Layout = ({ children }) => (
  <div className="blog">
    <Header />
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Layout;
