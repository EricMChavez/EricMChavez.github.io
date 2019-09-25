import React, { Component } from 'react';
import axios from 'axios'
import '../css/reviewForm.css'

const url = "https://goofy-hugle-884571.netlify.com/.netlify/functions/reviews";

const axiosConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
};

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
        const { fullname, jobTitle, reviewBody } = this.state
        e.preventDefault();

        const data = JSON.stringify({name: fullname, jobTitle:jobTitle, reviewBody:reviewBody});

        axios.post(url, data, axiosConfig)
        .then(res => {console.dir(res)})
        .catch(err => {console.dir(err)})

        this.setState({fullname: '', jobTitle: '',reviewBody: ''})
        document.getElementById("reviewForm").reset()
    }
    render() { 
        const { fullname, jobTitle, reviewBody } = this.state
        return ( 
            <form  onSubmit={this.handleSubmit} id="reviewForm">
                <div id="fullName">
                    <label htmlFor="fullname">Full Name</label>
                    <input value={fullname} onChange={this.handleChange} placeholder="Required" name="fullname" id="fullNameField" type="text"></input>
                </div>
                <div id="jobTitle">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input value={jobTitle} onChange={this.handleChange} name="jobTitle"  type="text"/>
                </div>
                <div id="recommendation">
                    <textarea value={reviewBody} placeholder="Say Something Nice" onChange={this.handleChange} name="reviewBody" type="text"/>
                </div>
                <div id="linkedIn"><p>...or consider recommending me on</p><a href="https://www.linkedin.com/in/eric-chavez-253b0895"><div id="linkedInIcon"></div></a></div>
                <button type="submit">SEND</button>
            </form>
        );
    }
}

export default ReviewForm;