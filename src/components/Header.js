import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <>
    <header>
      <h1>
        <Link to="/">K.Torun</Link>
      </h1>
      <nav>
        <Link to="/">HOME</Link> /
        <a target="_blank" rel="noopener norefer" href="https://ktorun.xyz">
          {" "}
          WEBPAGE
        </a>
      </nav>
    </header>
    <hr />
  </>
)

export default Header
