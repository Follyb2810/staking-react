// SwapConnect.js
import  { useContext, useState } from 'react';
import CustomModal from './Modal';
import { Col, Row } from 'react-bootstrap';
import Claim from './Claim';
import React from 'react'
import { WalletContext } from './../../Shared/StakingContext';
import WalletButton from './../../Shared/WalletButton';

const SwapConnect = () => {

  const {ConnectAccount,checkConnect} = useContext(WalletContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div>
      {
        checkConnect || <Claim/>
      }
      {checkConnect ? (
        <WalletButton content='connect' click={ConnectAccount} />
      ) : (
        <Row>
          <Col xs={6}>
            <WalletButton content='stake' click={handleShow} className='custom-button' />
          </Col>
          <Col xs={6}>
            <WalletButton content='unstake' className='custom-button' />
          </Col>
        </Row>
      )}
      <CustomModal show={show} hide={handleClose} />
    </div>
  );
}

export default SwapConnect;
