import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import CharacterInfo from "../CharacterInfo/CharacterInfo";

import { Container, Row, Col } from "react-bootstrap";

const CharacterInfoRoute = () => {
  const accountQuery = `https://www.pathofexile.com/character-window/get-account-name`;
  const accountResult = useFetch(accountQuery, {});
  // console.log("accountResult", accountResult.accountName);
  const [accountName, setAccountName] = useState("uberhasu");

  return (
    <Container>
      <Row>
        <Col className="">
          <CharacterInfo accountName={accountName} />
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterInfoRoute;
