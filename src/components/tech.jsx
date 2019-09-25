import React from 'react';
import './../css/tech.css'
const Tech = () =>{
    return(
        <React.Fragment>
        <div id="techAnchor"/>
        <div id="tech">
            
            <div id="techTitle">Technologies used to make this site</div>
            <div className="techLogo" id="JavascriptLogo"/>

            <div className="techLogo" id="reactLogo"/>
            <div className="techLogo" id="gitLogo"/>
            <div className="techLogo" id="nodeLogo"/>
            <div className="techLogo" id="lambdaLogo"/>
            <div className="techLogo" id="mongoLogo"/>

        </div>
        </React.Fragment>
    )
}
export default Tech