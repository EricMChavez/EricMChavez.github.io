import React, { Component } from 'react';
import './../css/header.css'
class Header extends Component {
    state = { 
        atTop: true
    }
    handleScroll = (e) => {
        if(e.path[1].scrollY === 0){
            this.setState({atTop:true})
        }else{
            this.setState({atTop:false})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    render() { 
        const { atTop } = this.state
        return ( 
            <div className={atTop ? "" : "header"} id="header">
            <div id="logo"></div>
            <div id="nav">
            <div>HOME</div>
            <div>/</div>
            <div>TECH</div>
            <div>/</div>
            <div>ABOUT ME</div>
            <div>/</div>
            <div>ARTICLES</div>
            </div>
        </div>
        );
    }
}

export default Header;
