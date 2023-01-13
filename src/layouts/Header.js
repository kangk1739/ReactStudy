import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
      </div>
      <div className="hstack gap-2">
        <Button
          color="dark"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
         <i className="bi bi-list"></i>
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>

          <NavItem>
            <Link to="/reactStudy" className="nav-link">
              React Study
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
            Template Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem href="/#/starter">
                Dashboard
              </DropdownItem>
              <DropdownItem href="/#/about">
                About
              </DropdownItem>
              <DropdownItem href="/#/alerts">
                Alert
              </DropdownItem>
              <DropdownItem href="/#/badges">
                Badegs
              </DropdownItem>
              <DropdownItem href="/#/buttons">
                Buttons
              </DropdownItem>
              <DropdownItem href="/#/cards">
                Cards
              </DropdownItem>
              <DropdownItem href="/#/grid">
                Grid
              </DropdownItem>
              <DropdownItem href="/#/table">
                Table
              </DropdownItem>
              <DropdownItem href="/#/forms">
                Forms
              </DropdownItem>
              <DropdownItem href="/#/breadcrumbs">
                Breadcrums
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="dark">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem to="" header>Info</DropdownItem>
            <DropdownItem to="">My Account</DropdownItem>
            <DropdownItem to="">Edit Profile</DropdownItem>
            <DropdownItem to="" divider />
            <DropdownItem to="">My Balance</DropdownItem>
            <DropdownItem to="">Inbox</DropdownItem>
            <DropdownItem to="">Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
