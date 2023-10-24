import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { footData } from './../data';

const Footer = () => {
  return (
    <footer className="bg-light container">
      <Row className="justify-content-between align-items-center">
        <Col xs={12} sm={6} md={4} className="text-center">
          <h1 className='text-start'>Logo</h1>
        </Col>
        <Col xs={12} sm={6} className="social-icons">
          <div className="d-flex justify-content-end gap-4">
            {footData.map((data, index) => (
              <a href={data.path} key={index}>
                {data.icon}
              </a>
            ))}
          </div>
        </Col>
        <Col xs={12} className="text-center">
          <p>Copyright @ 2023 Staking. All rights reserved.</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
