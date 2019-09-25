import React from 'react';
import './../css/drawer.css'
const Drawer = (props) => {
    return( 
        <React.Fragment>
            <div id="drawerBtn" className="shadow-right"  onClick={props.handleToggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="url(#grad1)" viewBox="0 0 600 600">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#3672D6'}}/>
                        <stop offset="100%" style={{stopColor:'#2D1FC3'}} />
                        </linearGradient>
                    </defs>
                    
                    <g className={props.isDrawerOpen ? "drawer closed" : "drawer"}>
                        <polygon points="150,112 425,112 425,187 225,187"/>
                        <polygon points="150,262 425,262 425,337 225,337 225,412 425,412 500,487 150,487"/>
                    </g>
                    <g className={props.isDrawerOpen ? "drawer" : "drawer open"}>
                        <polygon points="225,112 500,487 425,487 150,112"/>
                        <polygon points="425,112 150,487 225,487 500,112"/> 
                    </g>
                </svg>  
            </div>
            <div id="drawer" className={props.isDrawerOpen ? 'open' : 'closed'}>
                <a onClick={props.handleToggleDrawer} href="#landing" className="drawerlink">HOME</a>
                <a onClick={props.handleToggleDrawer} href="#reviewsAnchor" className="drawerlink">RECOMMENDATIONS</a>
                <a onClick={props.handleToggleDrawer} href="#techAnchor" className="drawerlink">TECH</a>
                <a onClick={props.handleToggleDrawer} href="#aboutAnchor" className="drawerlink">ABOUT ME</a>
            </div>
        </React.Fragment>
    )
}
export default Drawer;