import React from 'react';
import './../css/landing.css'
const Landing = () => {
    return( 
        <div className="full" id="landing">
            <div id="block1" className="blueBlock shadow-right"/>
            <div id="block2" className="blueBlock shadow"/>
            <div id="block3" className="blueBlock"/>

            <div id="face"/>
            <div id="title">
                <h1>Eric Chavez</h1>
                <div className="underLine"/>
                <h2>Full-Stack Developer</h2>
                <a rel="noopener noreferrer" target='_blank' href="https://pdfhost.io/v/JEENM3V26_Eric_Chavez.pdf" >
                    <div className="btn cta shadow-left">View Resumé</div>
                </a>
            </div>
            <div id="illustration"/>
        </div>
    )
}

export default Landing;