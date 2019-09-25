import React from 'react';
import './../css/header.css'
const Header = (props) => {
    return( 
        <div className={props.atTop ? "full" : "full header"} id="header">
            <div id="nav">
                <a href="#landing" id="logo"></a>
                <a href="#reviewsAnchor" className="navlink">RECOMMENDATIONS</a>
                <div className="slash">/</div>
                <a href="#techAnchor" className="navlink">TECH</a>
                <div className="slash">/</div>
                <a href="#aboutAnchor" className="navlink">ABOUT ME</a>
            </div>
        </div>
        )
}

export default Header;
