import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './../css/navbar.css'
import SideDrawer from './side-drawer'

class Navbar extends Component {
    state = {
        drawerOpen: false,
        selected:  window.location.href.split('/')[3]
    }
    openDrawer = () => {
        this.setState((prevState) => {
            return {drawerOpen: !prevState.drawerOpen}
        })
    }
    closeDrawer = () => {
            this.setState({drawerOpen: false})
    }
    render() { 
    const { drawerOpen } = this.state
        return ( 
            <React.Fragment>
                <SideDrawer close={this.closeDrawer} open={drawerOpen}/>
                <svg fill="white" onClick={this.openDrawer} id='menuBtn' width="100" viewBox="0 0 600 600">
                    <g className={drawerOpen ? 'menuBtn negative' : 'menuBtn'}>
                        <polygon points="150,112 425,112 425,187 225,187"/>
                        <polygon points="150,262 425,262 425,337 225,337 225,412 425,412 500,487 150,487"/>
                    </g>
                    <polygon className="minus" points="150,262 425,262 425,337 225,337 150,337"/>
                </svg>
                <div id="navbar">
                    <NavLink exact to="/" className="navItem">
                        <svg fill="white" className="navItem" width="100" viewBox="0 0 600 600">
                            <polygon points="150,112 425,112 425,187 225,187"/>
                            <polygon points="150,262 425,262 425,337 225,337 225,412 425,412 500,487 150,487"/>
                        </svg>
                    </NavLink>
                    <NavLink exact to="/front-end" className="navItem" activeClassName="selected">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5 8h14V5H5v3zm9 11v-9H5v9h9zm2 0h3v-9h-3v9zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
                            </svg>
                            <div>FRONT-END</div>
                    </NavLink>
                    <NavLink exact to="/back-end" className="navItem" activeClassName="selected">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"/>
                            </svg>
                            <div>BACK-END</div>
                    </NavLink>
                    <NavLink exact to="/contact" className="navItem" activeClassName="selected">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zm-.692-2H20V5H4v13.385L5.763 17zM8 10h8v2H8v-2z"/>
                            </svg>
                            <div>CONACT</div>
                    </NavLink>
                    <NavLink exact to="/blog" className="navItem" activeClassName="selected">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"/>
                            </svg>
                            <div>BLOG</div>
                    </NavLink>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;