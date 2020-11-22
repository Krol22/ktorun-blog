import React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <>
    <header>
      <h1><Link to="/">K.Torun</Link></h1>
      <nav>
        <Link to="/">HOME</Link> / 
        <a target="_blank" href="https://ktorun.xyz"> WEBPAGE</a>
      </nav>
    </header>
    <hr />
  </>
);

export default Navigation;

