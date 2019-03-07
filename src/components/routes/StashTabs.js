import React from "react";
import StashTabs from "../StashTabs/StashTabs";

import { Container, Row, Col } from "react-bootstrap";

const StashTabsRoute = () => (
  <Container>
    <Row>
      <Col className="">
        <StashTabs />
      </Col>
    </Row>
  </Container>
);

export default StashTabsRoute;
