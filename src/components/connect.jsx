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
        const connectBtn = <div onClick={this.toggleConnect} id="connectBtn">CONNECT</div>
        const connectForm = <form className={isConnectOpen ? "open" : 'null'} id="connectForm">
                Form
                <div id="closeBtn" onClick={this.toggleConnect}>X</div>
            </form>
        return ( 
            <div id="connect" className={formClassName}>
                {isConnectOpen ? connectForm : connectBtn}
            </div>
        );
    }
}

export default Connect;
