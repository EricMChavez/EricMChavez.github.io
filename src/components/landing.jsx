import React from 'react';
import './../css/landing.css'
const Landing = () => {
    return( 
        <div className="full" id="landing">
            <div id="blueBlock" className="shadow-right"/>
            <div id="face"/>
            <div id="title">
                <h1>Eric Chavez</h1>
                <div className="underLine"/>
                <h2>Full-Stack Developer</h2>
                <div className="btn cta shadow-left">Download Resume</div>
            </div>
            <div id="illustration"/>
        </div>
    )
}

export default Landing;