import React from "react";
import { Row, Col, Container } from "react-bootstrap/";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;