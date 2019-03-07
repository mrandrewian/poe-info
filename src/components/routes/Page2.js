import React from "react";
import "./Page2.scss";
import LeagueLadder from "../LeagueLadder/LeagueLadder";

import { Container, Row, Col } from "react-bootstrap";

const Page2 = () => (
  <Container>
    <Row>
      <Col className="">
        <LeagueLadder />
      </Col>
    </Row>
  </Container>
);

export default Page2;
