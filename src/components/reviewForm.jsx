import React, { Component } from 'react';
import '../css/reviewForm.css'


class ReviewForm extends Component {

    render() { 
        return ( 
            <div id="reviewPage">
                <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/eric-chavez-253b0895/detail/recommendation/write/">
                    <div id="reviewBtn">
                        <div>CONSIDER RECOMMENDING ME ON</div><div id="linkedInIcon"></div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ReviewForm;