import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav class="navbar row">
            <span class="col-2 navbar-brand mb-0 h1">Garfield Clicky Game!</span>
            <span class="col-2 navbar-brand mb-0 h1">Click an image to begin!</span>
            <span class="col-2 navbar-brand mb-0 h1">Score: 0 | Top Score: 0</span>
        </nav>
    )
}

export default Navbar;