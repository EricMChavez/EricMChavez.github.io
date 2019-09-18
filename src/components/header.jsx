import React from 'react';
import './../css/header.css'
const Header = (props) => {
    return( 
        <div className={props.atTop ? "full" : "full header"} id="header">
            <div id="nav">
                <a href="#landing" id="logo"></a>
                <a href="#tech" className="navlink">TECH</a>
                <div className="slash">/</div>
                <div className="navlink">REVIEWS</div>
                <div className="slash">/</div>
                <div className="navlink">ABOUT ME</div>
                <div className="slash">/</div>
                <div className="navlink">ARTICLES</div>
            </div>
        </div>
        )
}

export default Header;
