import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import LeagueList from "../routes/LeagueList";
import LeagueLadder from "../routes/LeagueLadder";
import StashTabs from "../routes/StashTabs";
import CharacterInfo from "../routes/CharacterInfo";

const MainNav = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>POE Info</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/character-info">
              <Nav.Link>Character Info</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/list">
              <Nav.Link>League Info</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ladder">
              <Nav.Link>Ladder</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stash-tabs">
              <Nav.Link>Stash Tabs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Route exact path="/" component={CharacterInfo} />
        <Route path="/character-info" component={CharacterInfo} />
        <Route path="/list" component={LeagueList} />
        <Route path="/ladder" component={LeagueLadder} />
        <Route path="/stash-tabs" component={StashTabs} />
      </div>
    </Router>
  );
};

export default MainNav;
