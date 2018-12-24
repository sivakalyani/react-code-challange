import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button, Table, Image } from 'react-bootstrap';
import ImageHolder from '../assets/image_place_holder.png';
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';
import '../styles/carousel_styles.scss';

const carouselSlidesData = [
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Heading",
        index:1
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Heading",
        index:2
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Heading",
        index:3
    }
];
class HeadlineDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false //This is where I am having problems
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isMobile: window.innerWidth <= 500 });
      }
    render() {      
        if (this.state.isMobile || this.props.isTextDisplayFirst) {
          return (
           
            <Row align="center" className="row-layout">
            <Col sm={7} align="right">
            <p>Referee Alan Maloney ordered New Jersey high school wrestler Andrew Johnson to cut off his dreadlocks or forfeit a match, prompting outrage as a video of the incident circulated online. The school says Maloney won’t officiate any more sporting events and state authorities are investigating what happened.</p>
            </Col> 
            <Col align="center">
            <Image src={ImageHolder} responsive />
            </Col> 
           </Row>
          );
        } else {
          return (
              
            <Row align="center" className="row-layout">
            <Col align="center">
            <Image src={ImageHolder} responsive />
            </Col>
            <Col sm={7} align="right">
            <p>Referee Alan Maloney ordered New Jersey high school wrestler Andrew Johnson to cut off his dreadlocks or forfeit a match, prompting outrage as a video of the incident circulated online. The school says Maloney won’t officiate any more sporting events and state authorities are investigating what happened.</p>
            </Col>  
           </Row>
           
          );
        }
      }
  }

class HeadlineDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: carouselSlidesData
        };
    }
    render() {
        return (
            <div>
            <Container>
                <Row className="row-layout">
                        <ul>
                            <Row border="1px">
                                {this.state.slides.map((slide, index) =>
                                    <Col sm={4} key={slide.index}>
                                        <Row align="center">
                                        <Col align="center">
                                            <Circle r={50} fill={{ color: 'gray' }}/>
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col align="center">
                                                <h2>{slide.headline}</h2>
                                                <p>
                                                    {slide.content}
                                                </p>
                                                <p>
                                                <Button type="submit" className="btn-color">View Details >></Button>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                )}
                            </Row>
                        </ul>
                        <div>
                        </div>
                </Row>
                <HeadlineDetail isTextDisplayFirst={true}></HeadlineDetail>
                <HeadlineDetail isTextDisplayFirst={false}></HeadlineDetail>
                <HeadlineDetail isTextDisplayFirst={true}></HeadlineDetail>
              <Row align="center" className="row-layout">
              <Col sm={6} align="left">
                    <p>@ 2017-2018 Company, Inc. <a href="#">Privacy-Terms</a></p>
                    </Col>
                    <Col align="right">
                    <a href="#">Back to top</a>
                    </Col>
              </Row>
            </Container>
            </div>
        );
    }
}
export default HeadlineDetails;