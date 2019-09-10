import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Boilerplate = (props) => {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                {props.children}
                <Footer/>
            </React.Fragment>
        )
    
}
export default Boilerplate