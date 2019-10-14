import React, { Component } from 'react';
import axios from 'axios'
import '../css/connectForm.css'

const url = "https://goofy-hugle-884571.netlify.com/.netlify/functions/messages"

const axiosConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};

class ConnectForm extends Component {
    state = { 
        name: '',
        email: '',
        messageBody: '',
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        const { name, email, messageBody } = this.state
        e.preventDefault()

        const data = JSON.stringify({name: name, email:email, messageBody:messageBody})
        console.dir(data)
        axios.post(url, data, axiosConfig)
        .then(res => {console.dir(res)})
        .catch(err => {console.dir(err)})

        this.setState({name: '', email: '',messageBody: ''})
        document.getElementById("messageForm").reset();
        this.props.toggleConnect()
        alert('Thank You! I will respond as soon as possible')
    }
    componentDidMount(){
        document.getElementById("nameField").focus()
    }
    render() { 
        const { name, email, messageBody  } = this.state
        return ( 
            <React.Fragment>
            <div id="greyScreen"/>
            <form id="messageForm" onSubmit={this.handleSubmit}>
            <div id="connectForm">
            <svg onClick={this.props.toggleConnect} id="closeBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="#000"/></svg>
                <div id="messageTitle">Send Me A Message</div>
                <div id="messageName">
                    <label htmlFor="name">Full Name</label>
                    <input value={name} id="nameField" onChange={this.handleChange} name="name"  type="text"/>
                </div>
                <div id="messageEmail">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={this.handleChange} name="email"  type="text"/>
                </div>
                <textarea id="messageBody" name="messageBody" onChange={this.handleChange} value={messageBody} cols="30" rows="10"/>
                <button type="submit">SEND</button>
            
            <div id="social">
                <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/eric-chavez-253b0895"><div className="shadow" id="linkedInIcon"></div></a>
                <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/eric.chavez.3154"><div className="shadow" id="facebookIcon"></div></a>
                <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/eric_m_chavez/"><div className="shadow" id="instagramIcon"></div></a>
            </div>
            </div>
            </form>
            </React.Fragment>
        );
    }
}
 
export default ConnectForm;