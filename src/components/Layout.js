import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import EasterEgg from "./EasterEgg"

import "../index.css"

const Layout = ({ title, description = "", children }) => (
  <div className="blog">
    <Header />
    <Helmet>
      <title>{title} - K.Torun</title>
      <meta name="description" content={description} />
    </Helmet>
    <main>{children}</main>
    <Footer />
    <EasterEgg />
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Layout
