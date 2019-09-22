import React from 'react';
import './../css/footer.css'
const Footer = () =>{
    return(
        <div className="full" id="footer">
            <svg id="footerLogo" xmlns="http://www.w3.org/2000/svg" fill="white" height="50px" viewBox="0 0 600 600">
                <polygon points="150,112 425,112 425,187 225,187"/>
                <polygon points="150,262 425,262 425,337 225,337 225,412 425,412 500,487 150,487"/>
            </svg>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik
            </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    )
}
export default Footer