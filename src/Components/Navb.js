// FileName: Navb.js

import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1 class="gradient-text" >INDOLIKE Music Player</h1>
            <button
                onClick={() => {
                    setLibraryStatus(!libraryStatus);
                }}
            >
                <h4 className="rotate-on-hover">Library</h4>
            </button>
        </nav>
    );
};

export default Nav;