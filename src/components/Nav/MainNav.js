import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Home from "../routes/Home";
import Page2 from "../routes/Page2";

const MainNav = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>POE Info</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>League Info</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/page2">
              <Nav.Link>Ladder</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
      </div>
    </Router>
  );
};

export default MainNav;
