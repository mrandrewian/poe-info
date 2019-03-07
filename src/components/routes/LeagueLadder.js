import React from "react";
import LeagueLadder from "../LeagueLadder/LeagueLadder";

import { Container, Row, Col } from "react-bootstrap";

const LeagueLadderRoute = () => (
  <Container>
    <Row>
      <Col className="">
        <LeagueLadder />
      </Col>
    </Row>
  </Container>
);

export default LeagueLadderRoute;
