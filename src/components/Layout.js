import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import Header from "./Header";

import "../index.css";

const Layout = ({
  title,
  children,
}) => (
  <div className="blog">
    <Header />
    <Helmet>
      <title>{title} - K.Torun</title>
    </Helmet>
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.string
};

export default Layout;
