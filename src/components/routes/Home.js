import React from "react";
import "./Home.scss";
import LeagueList from "../LeagueList/LeagueList"

import { Container, Row, Col } from "react-bootstrap";

const Home = () => (
  <Container>
    <Row>
      <Col className="">
        <LeagueList/>
      </Col>
    </Row>
  </Container>
);

export default Home;