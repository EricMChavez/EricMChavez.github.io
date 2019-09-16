import React from 'react';
import { NavLink } from 'react-router-dom'
import './../css/navbar.css'

const SideDrawer = (props) => {
        return ( 
            <div className={props.open ? 'drawer open': 'drawer' }>
                <div></div>
                    <NavLink exact to="/" className="menuItem" activeClassName="selected" onClick={props.close}>
                        Home
                    </NavLink>
                    <NavLink exact to="/front-end" className="menuItem" activeClassName="selected" onClick={props.close}>
                        FRONT-END
                    </NavLink>
                    <NavLink exact to="/back-end" className="menuItem" activeClassName="selected" onClick={props.close}>
                        BACK-END
                    </NavLink>
                    <NavLink exact to="/contact" className="menuItem" activeClassName="selected" onClick={props.close}>
                        CONACT
                    </NavLink>
                    <NavLink exact to="/articles" className="menuItem" activeClassName="selected" onClick={props.close}>
                        ARTICLES
                    </NavLink>
            </div>
        );
    }

export default SideDrawer;