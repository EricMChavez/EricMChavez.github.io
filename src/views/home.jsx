import React, { Component } from 'react';
import './../css/style.css'
import './../css/home.css'
import Header from './../components/header'
import Footer from './../components/footer'
class Home extends Component {
    state = { 
        atTop: true
    }
    handleScroll = (e) => {
        console.dir(e)
        if(e.pageY === 0){
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
            <React.Fragment>
            <Header atTop={atTop}/>
            <div className="full" id="landing">
                <div id="blueBlock"></div>
                <div id="face"></div>
                <div id="title">
                    <h1>Eric Chavez</h1>
                    <div className="underLine"></div>
                    <h2>Full-Stack Developer</h2>
                    <div className="btn cta">Download Resume</div>
                </div>
                <div id="illustration"></div>
            </div>
            <div className="grey full"></div>
            <div className="white full"></div>
            <div className="grey full"></div>
            <div className="white full"></div>
            <Footer/>
            </React.Fragment>
        );
    }
}
export default Home;