import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button, Table, Image } from 'react-bootstrap';
import ImageHolder from '../assets/image_place_holder.png';
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';
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

  export default HeadlineDetail;
