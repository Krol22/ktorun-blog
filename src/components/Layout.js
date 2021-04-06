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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦄</text></svg>"
      />
    </Helmet>
    <hr />
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
