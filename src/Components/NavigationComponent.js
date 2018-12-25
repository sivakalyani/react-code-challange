import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";

class NavbarPage extends React.Component {

  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.state = {
      isOpen: false

    };
  }

  toggleCollapse() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Navbar dark expand="md" className="navbar-color">
          <NavbarBrand>
            <strong className="white-text">Carousel</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="#!"><strong className="white-text">Home</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!" className="disabled">Disabled</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
              <FormInline>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </FormInline>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;