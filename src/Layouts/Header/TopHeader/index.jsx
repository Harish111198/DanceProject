import React from "react";
import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import MyLogo from "../../../assets/logo.jpg";

const TopHeader = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar fixed="top" color="white" light>
        <NavbarBrand href="/" className="me-auto">
          <img
            src={MyLogo}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          ></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Enquiry Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Dance Styles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Social Accounts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact Details</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default TopHeader;
