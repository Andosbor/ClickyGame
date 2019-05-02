import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar row">
            <span className="col-2 navbar-brand mb-0 h1">Garfield Clicky Game!</span>
            <span className="col-2 navbar-brand mb-0 h1">Click an image to begin!</span>
            <span className="col-2 navbar-brand mb-0 h1">Score: 0 | Top Score: 0</span>
        </nav>
    )
}

export default Navbar;