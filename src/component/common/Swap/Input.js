import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const Input = () => {
    return (
        <InputGroup className="mb-3">
        
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          type='number'
        />
        <Button variant="danger" id="button-addon1">
          Max
        </Button>
      </InputGroup>
    )
}

export default Input
