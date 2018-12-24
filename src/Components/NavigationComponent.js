import React from "react";
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';

class ApplicationTest extends React.Component {
  render() {
    return(<Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Carousel</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Disabled
          </NavItem>
        </Nav>
  <Navbar.Collapse>
    <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit" className="btn-custom">Search</Button>
    </Navbar.Form>
  </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>);
  }
}


export default ApplicationTest;