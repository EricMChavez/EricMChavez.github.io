import React, { Component } from 'react';
import './../css/style.css'
import './../css/home.css'
import Header from './../components/header'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Header/>
            <div id="landing">
                <div id="title">
                    <h1>Eric Chavez</h1>
                    <div id="line"></div>
                    <h2>Full-Stack Developer</h2>
                    <div id="cta">MESSAGE ME</div>
                </div>
                <div id="blueBlock"></div>
                <div id="face"></div>
                <div id="devices"></div>
            </div>
            <div className="grey"></div>
            <div className="white"></div>
            </React.Fragment>
        );
    }
}
export default Home;