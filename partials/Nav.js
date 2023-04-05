import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logomark from "/public/images/adi-logomark.webp";
import Button from "../components/Button";

const StyledNavBar = styled(Navbar)`
  background-color: #042c3d;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledSpacer = styled.div`
  margin-bottom: 100px;
`;

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <StyledNavBar fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="https://www.classy.org/campaign/africa-development-initiative/c475449">
            <Image src={logomark} width={250} />
          </Navbar.Brand>
          <Navbar.Toggle>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-end align-items-center">
            <Nav>
              <Nav.Link
                href="https://www.classy.org/give/475449/#!/donation/checkout"
                target="_blank"
                rel="noreferrer"
                className="align-items-center"
              >
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavBar>
      <StyledSpacer />
    </>
  );
};
