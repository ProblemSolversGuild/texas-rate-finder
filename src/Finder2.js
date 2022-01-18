// import './Finder.css';
import OutputPlanList from './components/OutputPlanList'
import UsageChart from './components/UsageChart'
import { Button, Col, Row, Container } from 'react-bootstrap'

function Finder2() {
  return (
    <Container>
        {/* <div className='px-4 py-5 my-5'>
          <div className='vstack col-6 text-center mx-auto'> */}
            <Row className='px-4 py-5 my-5'>
                <Col><h1>Texas Rate Finder</h1></Col>
                {/* <Col></Col> */}
            </Row>
            <Row>
              <UsageChart />
            </Row>
            <Row>
              <OutputPlanList />
              <Col></Col>
              <Col>
                <Row></Row>
                <Button variant="success">Connect Your Real Usage</Button>
                <Row></Row>
              </Col>
            </Row>
          {/* </div>
        </div> */}
    </Container>
  );
}

export default Finder2;
