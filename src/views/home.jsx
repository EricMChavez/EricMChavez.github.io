import React, { Component } from 'react';
import './../css/style.css'
import './../css/home.css'
import Header from './../components/header'
import Footer from './../components/footer'
import Landing from './../components/landing'
import Values from './../components/values'
import Drawer from './../components/drawer'
import Reviews from './../components/reviews'
import Tech from './../components/tech'
import About from './../components/about'
class Home extends Component {
    state = { 
        atTop: true,
        isDrawerOpen: false
    }
    handleScroll = (e) => {
        if(e.pageY === 0){
            this.setState({atTop:true})
        }else{
            this.setState({atTop:false})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    toggleDrawer = () => {
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen
        }))
    }
    render() { 
        const { atTop, isDrawerOpen } = this.state
        return ( 
            <React.Fragment>
            <Drawer isDrawerOpen={isDrawerOpen} handleToggleDrawer={this.toggleDrawer}/>
            <Header atTop={atTop}/>
            <Landing/>
            <div className="grey full"><Values/></div>
            <div className="white full"><div id="tech"/><Tech/></div>
            <div className="grey full"><div id="reviews"/><Reviews/></div>
            <div className="white full"><div id="about"/><About/></div>
            <Footer/>
            </React.Fragment>
        );
    }
}
export default Home;