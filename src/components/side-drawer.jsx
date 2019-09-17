import React from 'react';
import { NavLink } from 'react-router-dom'
import './../css/navbar.css'

const SideDrawer = (props) => {
        return ( 
            <React.Fragment>
                <div className={props.open ? 'modal grey': 'modal' } ></div>
                <div className={props.open ? 'drawer open': 'drawer' }>
                    <div className="menuItem"></div>
                        <NavLink exact to="/" className="menuItem" activeClassName="selected" onClick={props.close}>
                            Home
                        </NavLink>
                        <NavLink exact to="/skills" className="menuItem" activeClassName="selected" onClick={props.close}>
                            SKILLS
                        </NavLink>
                        <NavLink exact to="/personal" className="menuItem" activeClassName="selected" onClick={props.close}>
                            PERSONAL
                        </NavLink>
                        <NavLink exact to="/contact" className="menuItem" activeClassName="selected" onClick={props.close}>
                            CONACT
                        </NavLink>
                        <NavLink exact to="/articles" className="menuItem" activeClassName="selected" onClick={props.close}>
                            ARTICLES
                        </NavLink>
                </div>
            </React.Fragment>
        );
    }

export default SideDrawer;