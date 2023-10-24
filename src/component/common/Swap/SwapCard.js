import { Button, Card, Col, Row } from 'react-bootstrap';
import { SwapCardData} from '../../data';
import SwapConnect from './SwapConnect';
import React from 'react'
function SwapCard() {
  return (
    <Card className='flex-grow-1 rounded-5 text-center p-2 py-4'>
      <Card.Body className='p-0'>
        <Card.Title> Folly Stake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Earn Folly Coin</Card.Subtitle>
        
         <Button variant="outline-danger rounded-4 px-3 py-2 ms-2">buy</Button>
         <Button variant="outline-danger rounded-4 px-3 py-2 ms-2">sell</Button>
        
        <Card.Text>
          {
            Object.entries(SwapCardData).map(([key,value])=>(
              <Row key={key}>
                <Col xs={6}>
                  <Card.Text>
                    {key}
                  </Card.Text>
                </Col>
                <Col xs={6}>
                  <Card.Text>
                    {value}
                  </Card.Text>
                </Col>
              </Row>
            ))
          }
        </Card.Text>
       
       <SwapConnect/>
      </Card.Body>
    </Card>
  );
}

export default SwapCard;

// import { Card, Col, Row } from 'react-bootstrap';
// import { SwapCardData } from '../data';

// function SwapCard() {
//   return (
//     <Card className='flex-grow-1'>
//       <Card.Body>
//         <Card.Title> Folly Stake</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Earn Folly Coin</Card.Subtitle>
//         <Card.Text>
//           {
//             SwapCardData.map((data, index) => (
//               Object.entries(data).map(([key, value]) => (
//                 <Row key={index}>
//                   <Col xs={6}>{key}</Col>
//                   <Col xs={6}>{value}</Col>
//                 </Row>
//               ))
//             ))
//           }
//         </Card.Text>
//         <Card.Text>a</Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default SwapCard;

