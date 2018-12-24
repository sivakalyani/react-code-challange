import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button, Table, Image } from 'react-bootstrap';
import HeadlineDetail from './HeadlineDetailComponent.js'
import ImageHolder from '../assets/image_place_holder.png';
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';

const carouselSlidesData = [
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Headline1"
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Headline2"
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Headline3"
    }
];
class HeadlineBody extends Component {
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
                                    <Col sm={4} key={slide.headline}>
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
export default HeadlineBody;