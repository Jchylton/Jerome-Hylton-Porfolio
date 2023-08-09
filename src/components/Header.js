import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <Nav>
      <Name>Jerome Hylton</Name>
      <List>
        <HashLink to={"/#Hero"} style={linkStyle}>
          {" "}
          Home |{" "}
        </HashLink>
        <HashLink to={"/#About"} style={linkStyle}>
          {" "}
          About Me |{" "}
        </HashLink>
        <HashLink to={"/#Expertise"} style={linkStyle}>
          Expertise |{" "}
        </HashLink>
        <HashLink to={"/#Projects"} style={linkStyle}>
          Projects |{" "}
        </HashLink>
        <HashLink to={"/#Getintouch"} style={linkStyle}>
          {" "}
          Contact
        </HashLink>
      </List>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3px;
  position: fixed;
  background-color: white;
  width: 100%;
  border: 2px solid grey;
  z-index: 100;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-right: 15px;
  width: 95%;
  justify-content: right;
  text-decoration: none;
  font-family: arial;
`;

const Name = styled.p`
  width: 150px;
  margin-left: 5px;
  font-family: arial;
`;

const linkStyle = {
  margin: "5px",
  textDecoration: "none",
  color: "black",
};
