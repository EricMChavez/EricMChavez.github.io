import React, { Component } from 'react';
import '../css/connect.css'

class Connect extends Component {
    state = { 
        isConnectOpen: false,
        name: '',
        title: '',
        email: '',
        message: '',
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    toggleConnect = () => {
        this.setState(prevState => ({
            isConnectOpen: !prevState.isConnectOpen
        }))
    }
    render() { 
        const { name, title, email, message, isConnectOpen  } = this.state
        var formClassName
        if (isConnectOpen) {
            formClassName = 'open'
        }else if(this.props.atTop){
            formClassName = 'hidden'
        }
        return ( 
            <React.Fragment>
            <div id="greyScreen" className={isConnectOpen ? null : "greyClosed"}/>
            <div onClick={this.toggleConnect} className={formClassName} id="connectBtn">CONNECT</div>
            <div id="connectForm" className={isConnectOpen ? null : "greyClosed"}>
            <svg onClick={this.toggleConnect} id="closeBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="#000"/></svg>
            </div>
            </React.Fragment>
        );
    }
}

export default Connect;
