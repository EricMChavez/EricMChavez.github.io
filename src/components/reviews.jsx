import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonLast,DotGroup } from 'pure-react-carousel';
import ReviewForm from './reviewForm'
import "pure-react-carousel/dist/react-carousel.es.css";
import './../css/reviews.css'
class Reviews extends Component{
    
    setFocus = () => {
        setTimeout(() => {
            document.getElementById("fullNameField").focus()
        }, 400);
        
        
    }
    render(){
    return(
        <React.Fragment>
        <div className="stripe" id="reviewsStripe"/>
        <CarouselProvider
        naturalSlideWidth={800}
        naturalSlideHeight={280}
        totalSlides={2}
        dragEnabled={false}
        >
        <div id="reviews" className="shadow">
            <div id="reviewsHeader">
                <div id="reviewsTitle">Recommendations</div>
                <ButtonLast onClick={this.setFocus}  className="reviewsBtn">WRITE RECOMENTATION</ButtonLast>
            </div>
            
        <div className="slider">
            <Slider>
            <Slide className="slide" index={0}>
                <div className="review">
                    <div className="reviewPic trinity"/>
                    <div className="reviewTitle"><div className="reviewName">Trinity Siemer</div>Teachers Assistant at Inventive Academy, LLC and Associate Software Engineer for Inventive Group</div>
                    <div className="reviewWords">"I TA'ed the academy that Eric went through and he amazed me and all the other teachers and TA's the entire 6 months showing great determination and ambition even making the culture of the class amazing with his wittiness. We all think he would make a great addition to any team!"</div>
                </div>
            </Slide>
            <Slide className="slide" index={3}><ReviewForm/></Slide>
            </Slider>
            
            <ButtonBack className="backBtn slideBtn"></ButtonBack>
            <ButtonNext className="nextBtn slideBtn"></ButtonNext>
            <DotGroup className="dots"/>
        </div>
        
        </div></CarouselProvider>
        </React.Fragment>
    )
    }
}
export default Reviews