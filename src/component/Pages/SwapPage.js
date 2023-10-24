import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function SwapPage() {
  return (
    <div className="SwapPage">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="mt-5">Coming Soon!</h1>
            <p className="lead">Our amazing website is under construction.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SwapPage;
