import React,  { Component } from 'react';
import classnames from 'classnames';
import NavigationBar from './NavigationComponent.js';
import '../styles/carousel_styles.scss';

const carouselSlidesData = [
    {
      content:
        "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
      headline: "Breaking news headlines",
    },
    {
      content:
        "Referee Alan Maloney ordered New Jersey high school wrestler Andrew Johnson to cut off his dreadlocks or forfeit a match, prompting outrage as a video of the incident circulated online. The school says Maloney won’t officiate any more sporting events and state authorities are investigating what happened.",
      headline: "Breaking news headlines",
      source: "facebook"
    },
    {
      content:
        "Partial government shutdown to continue through next week The Senate adjourned Saturday without movement on a deal to end the impasse, with its next scheduled session set for Thursday, Dec. 27.",
      headline: "Breaking news headlines",
      source: "facebook"
    }
  ];
  class CarouselLeftArrow extends Component {
    render() {
      return (
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={this.props.onClick}
        >
          <span className="fa fa-2x fa-angle-left" />
        </a>
      );
    }
  }
  class CarouselRightArrow extends Component {
    render() {
      return (
        <a
          href="#"
          className="carousel__arrow carousel__arrow--right"
          onClick={this.props.onClick}
        >
          <span className="fa fa-2x fa-angle-right" />
        </a>
      );
    }
  }
  class CarouselIndicator extends Component {
    render() {
      return (
        <li>
          <a
            className={
              this.props.index == this.props.activeIndex
                ? "carousel__indicator carousel__indicator--active"
                : "carousel__indicator"
            }
            onClick={this.props.onClick}
          />
        </li>
      );
    }
  }
  class CarouselSlide extends Component {
    render() {
      return (
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
        <h1 className="carousel-slide__heading">
        {this.props.slide.headline}</h1>
        <p className="carousel-slide__content">
        {this.props.slide.content}</p>
        </li>
      );
    }
  }
  
  class Carousel extends Component { 
    constructor(props) {
      super(props);
      this.goToSlide = this.goToSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
  
      this.state = {
        activeIndex: 0,
        slides: carouselSlidesData
      };
    }
  
    goToSlide(index) {
      this.setState({
        activeIndex: index
      });
    }
  
    goToPrevSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let slides  = this.state.slides;
      let slidesLength = slides.length;
  
      if (index < 1) {
        index = slidesLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let slides  = this.state.slides;
      let slidesLength = slides.length - 1;
  
      if (index === slidesLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }
  
  
    render() {
        return (
          <div>

          <div className="carousel">
          <NavigationBar></NavigationBar>

          <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.state.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}

        </ul>
        

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.state.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
      </div>
        );
      }
}
  export default Carousel;
