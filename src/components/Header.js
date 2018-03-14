import React from "react";


// This is a Stateless Funcitonal Component
// It only returns the render method
// Header is only passing data via props and returning JSX
// Saves code and performance.

const Header = ({subtitle , tagline}) => (
    <header className="top">
        <h1>
            Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <p>{subtitle}</p>
            <span>{tagline}</span>
        </h3>        
    </header>
)
export default Header;