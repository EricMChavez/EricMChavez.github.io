import React from 'react';
import './../css/header.css'
const Header = (props) => {
    return( 
        <div className={props.atTop ? "full" : "full header"} id="header">
            <div id="nav">
                <a href="#landing" id="logo"></a>
                <a href="#tech" className="navlink">TECH</a>
                <div className="slash">/</div>
                <a href="#reviews" className="navlink">REVIEWS</a>
                <div className="slash">/</div>
                <a href="#about" className="navlink">ABOUT ME</a>
                <div className="slash">/</div>
                <a href="articles" className="navlink">ARTICLES</a>
            </div>
        </div>
        )
}

export default Header;
