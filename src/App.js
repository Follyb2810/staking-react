
import './App.css';
import Template from './component/Shared/Template';
import { Col, Row } from 'react-bootstrap';
import SwapCard from './component/common/Swap/SwapCard';


function App() {
  return (
    <Template title='Staking'>
    <Row className='justify-content-between align-items-center'>
    <Col xs={12} sm={12} md={6} >
    <SwapCard/>
    </Col>
    </Row>
</Template>
  );
}

export default App;
