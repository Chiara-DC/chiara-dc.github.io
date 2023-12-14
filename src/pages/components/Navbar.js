import navstyle from "./Navbar.css";
import * as React from "react"

export default function Navbar() {
  return (
    <>
      <nav>
        <a className=".navtitle" href="/">
          Chiara DC
        </a>
        <a className=".navtext" href="/">
          About
        </a>

        <a className=".navtext" href="/photography">
          Photography
        </a>

        <a className=".navtext" href="/">
          Contact
        </a>
      </nav>
    </>
  );
  }
