import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonLast,DotGroup } from 'pure-react-carousel';
import ReviewForm from './reviewForm'
import "pure-react-carousel/dist/react-carousel.es.css";
import './../css/reviews.css'
class Reviews extends Component{
    state = {
        mobile: false
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    resize() {
        if(window.innerWidth <= 1000){
            this.setState({mobile: true});
        }else{
            this.setState({mobile: false});

        } 
    }
    setFocus = () => {
        setTimeout(() => {
            document.getElementById("fullNameField").focus()
        }, 400);
        
        
    }
    render(){
        const { mobile } = this.state
    return(
        <React.Fragment>
        <div id="reviewsAnchor" />
        <div className="stripe shadow" id="reviewsStripe"/>
        <CarouselProvider
        naturalSlideWidth={mobile ? (300) :(800)}
        naturalSlideHeight={mobile ? (580) :(260)}
        totalSlides={3}
        dragEnabled={false}
        >
        <div id="reviews" className="shadow">
            <div id="reviewsHeader">
                <div id="reviewsTitle">Recommendations</div>
                <ButtonLast onClick={this.setFocus}  className="reviewsBtn">WRITE RECOMMENDATION</ButtonLast>
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
            <Slide className="slide" index={1}>
                <div className="review">
                    <div className="reviewPic james"/>
                    <div className="reviewTitle"><div className="reviewName">James Shaw</div>co-founder of Inventive - COO, improving lives with technology</div>
                    <div className="reviewWords">Eric is an enthusiastic learner and engineer - he has over-delivered and surprised us on a few occasions, giving us more than we hoped for! He was in our 6-month cohort and was dedicated throughout; certainly a star of the cohort and the first we hired. We're excited to have Eric on board and helping him gain experience in real-world projects.</div>
                </div>
            </Slide>
            <Slide className="slide" index={2}><ReviewForm/></Slide>
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