import React, {Component} from 'react';
import {Carousel, CarouselInner} from 'mdbreact';
import CarouselSlide from './CarouselSlideComponent.js';

const carouselSlidesData = [
  {
    content:
        'Economists say Trump\'s criticism of Powell misrepresents Fed\'s role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ',
    headline: 'Breaking news headlines',
    id: 0,
  },
  {
    content:
        'Referee Alan Maloney ordered New Jersey high school wrestler Andrew Johnson to cut off his dreadlocks or forfeit a match, prompting outrage as a video of the incident circulated online.',
    headline: 'Breaking news headlines',
    id: 1,
  },
  {
    content:
        'Partial government shutdown to continue through next week The Senate adjourned Saturday without movement on a deal to end the impasse, with its next scheduled session set for Thursday, Dec. 27.',
    headline: 'Breaking news headlines',
    id: 2,
  },
];
class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-3x fa-angle-left" />
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
        <span className="fa fa-3x fa-angle-right" />
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
                ? 'carousel__indicator carousel__indicator--active'
                : 'carousel__indicator'
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselCustom extends Component {
  constructor(props) {
    super(props);
    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
      slides: carouselSlidesData,
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const slides = this.state.slides;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    const slides = this.state.slides;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }


  render() {
    return (
      <div>
        <Carousel activeItem={this.state.activeIndex} length={this.state.slides.length-1} showControls={false} showIndicators={false} >
          <CarouselInner className="carousel-item active">
            <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />
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
            <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />
            <ul className="carousel__indicators">
              {this.state.slides.map((slide, index) =>
                <CarouselIndicator
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  onClick={(e) => this.goToSlide(index)}
                />
              )}
            </ul>
          </CarouselInner>
        </Carousel>
      </div>
    );
  }
}
export default CarouselCustom;
