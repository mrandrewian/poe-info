import React from "react";
import LeagueList from "../LeagueList/LeagueList"

import { Container, Row, Col } from "react-bootstrap";

const LeagueListRoute = () => (
  <Container>
    <Row>
      <Col className="">
        <LeagueList/>
      </Col>
    </Row>
  </Container>
);

export default LeagueListRoute;