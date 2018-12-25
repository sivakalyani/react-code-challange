import React, {Component} from 'react';
import {MDBRow, MDBCol} from 'mdbreact';
import ImageHolder from '../assets/image_place_holder.png';

class HeadlineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false, // This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    this.setState({isMobile: window.innerWidth <= 500});
  }
  render() {
    if (this.state.isMobile || this.props.isTextDisplayFirst) {
      return (

        <MDBRow align="center" className="row-layout">
          <MDBCol md="8" align="center" >
            <h2 className="h2-responsive">First feature heading.It will blow your mind </h2>
            <p className="lead">Referee Alan Maloney ordered New Jersey high school wrestler Andrew Johnson to cut off his dreadlocks or forfeit a match, prompting outrage as a video of the incident circulated online. The school says Maloney won’t officiate any more sporting events and state authorities are investigating what happened.</p>
          </MDBCol>
          <MDBCol md="4" align="right">
            <img src={ImageHolder} className="img-fluid" alt="aligment" />
          </MDBCol>
        </MDBRow>
      );
    } else {
      return (
        <MDBRow align="center" className="row-layout">
          <MDBCol md="4" align="center">
            <img src={ImageHolder} className="img-fluid" alt="aligment" />
          </MDBCol>
          <MDBCol md="8" align="right">
            <h2 className="h2-responsive">First feature heading.It will blow your mind </h2>
            <p className="lead">Referee Alan Maloney ordered New Jersey high school wrestler Andrew Johnson to cut off his dreadlocks or forfeit a match, prompting outrage as a video of the incident circulated online. The school says Maloney won’t officiate any more sporting events and state authorities are investigating what happened.</p>
          </MDBCol>
        </MDBRow>
      );
    }
  }
}

export default HeadlineDetail;
