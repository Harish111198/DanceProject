import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

import "./UpperTopHeader.css";

const UpperTopHeader = () => {
  return (
    <div className="UpperTopHeader">
      <>
        <Navbar fixed="top" className="my-0" color="dark" dark>
          <NavbarBrand href="mailto:harishk001998@gmail.com">
            Email Us
          </NavbarBrand>

          <div className="linkContainer">
            <div>
              <a
                className="upperHeaderLink"
                href="https://www.instagram.com/sharishrai/"
              >
                {" "}
                Instagram
              </a>
            </div>
            <div>
              <a
                className="upperHeaderLink"
                href="https://facebook.com/profile.php?id=100008209991166"
              >
                Facebook
              </a>
            </div>
            <div>
              <a
                className="upperHeaderLink"
                href="https://twitter.com/HarishK84860080"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                className="upperHeaderLink"
                href="https://www.youtube.com/channel/UCYmfQZcDwhY0R_gB6NLIFsw"
              >
                Youtube
              </a>
            </div>
          </div>
        </Navbar>
      </>
    </div>
  );
};
export default UpperTopHeader;
