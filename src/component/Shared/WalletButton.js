
import { Button } from 'react-bootstrap';
import React from 'react'
const WalletButton = ({ content, click, className }) => {
  return (
    <Button className={`rounded-5 ${className}`} onClick={click} variant='danger'>
      {content}
    </Button>
  );
}

export default WalletButton;
