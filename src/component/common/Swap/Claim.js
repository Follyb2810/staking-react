import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ClamData } from '../../data'

const Claim = () => {
    return (
        <Row className='m-3'>
          {
            Object.entries(ClamData).map(([key,value])=>(
                <Col xs={6} key={key}>
                <div className="p-2"><b>{key}</b></div>
                <div className="p-2">{value}</div>
          </Col>
            ))
          }
        </Row>
    )
}

export default Claim
