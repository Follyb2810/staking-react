// Modal.js
// import React from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const CustomModal = ({ show, hide }) => {
//   return (
//     <Modal show={show} onHide={hide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Stake Token</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//        <h6>Available Token:1111</h6>

//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={hide}>
//           Cancel
//         </Button>
//         <Button variant="primary" >
//           Confirm
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CustomModal;



// // Modal.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Input from './Input';

const CustomModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Stake Token</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h6>Available Token:1111</h6>
      <Input/>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant="danger" onClick={hide}>
          Cancel
        </Button>
        <Button variant="primary" >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
