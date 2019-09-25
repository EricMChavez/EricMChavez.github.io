import React, { Component } from 'react';
import axios from 'axios'
import '../css/reviewForm.css'

const url = "https://goofy-hugle-884571.netlify.com/.netlify/functions/reviews"

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            jobTitle: '',
            reviewBody: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        const { fullname, title, body } = this.state
        e.preventDefault();
        
        axios.post(url, {name: fullname, jobTitle:title, reviewBody:body})
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})

        this.setState({fullname: '', jobTitle: '',recommendation: ''})
        document.getElementById("reviewForm").reset()
    }
    render() { 
        const { fullname, title, body } = this.state
        return ( 
            <form  onSubmit={this.handleSubmit} id="reviewForm">
                <div id="fullName">
                    <label for="fullname">Full Name</label>
                    <input value={fullname} onChange={this.handleChange} placeholder="Required" name="fullname" id="fullNameField" type="text"></input>
                </div>
                <div id="jobTitle">
                    <label for="jobTitle">Job Title</label>
                    <input value={title} onChange={this.handleChange} name="jobTitle"  type="text"/>
                </div>
                <div id="recommendation">
                    <textarea value={body} placeholder="Say Something Nice" onChange={this.handleChange} name="reviewBody" type="text"/>
                </div>
                <div id="linkedIn"><p>...or consider recommending me on</p><a href="https://www.linkedin.com/in/eric-chavez-253b0895"><div id="linkedInIcon"></div></a></div>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default ReviewForm;