import React from "react";
import { Navbar, Nav, ButtonGroup, Button, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="bg-light py-3">
      <Container>
        <Nav className="">
          <ButtonGroup className="filter-buttons">
            <Button variant="warning" className="rounded-pill text-white me-2">
              All
            </Button>
            <Button variant="outline-secondary" className="rounded-pill me-2">
              Listening
            </Button>
            <Button variant="outline-secondary" className="rounded-pill me-2">
              Learning
            </Button>
            <Button variant="outline-secondary" className="rounded-pill me-2">
              Rehearsal
            </Button>
            <Button variant="outline-secondary" className="rounded-pill">
              Perform
            </Button>
          </ButtonGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
