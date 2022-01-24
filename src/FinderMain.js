import './FinderMain.css';
import OutputPlanList from './components/OutputPlanList'
import UsageChart from './components/UsageChart'
import Sidebar from './components/Sidebar';
import { getUsage } from './data/Usage';
import { getRatePlanList } from './data/RatePlanList';
import { Button, Col, Row, Container, Offcanvas, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function FinderMain() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)

  return (
    <>
      <Container fluid>
        <Row>
          
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar />
            </Offcanvas.Body>
          </Offcanvas>

          <Col xs={12}>
            <Row className='py-5'></Row>
            <Row>
              <Col></Col>
              <Col>
                <Button className='mx-2' variant="success" onClick={() => navigate("/SignUp")}>Connect Your Real Usage</Button>
                
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <UsageChart usageData={getUsage()} />
              <Col></Col>
            </Row>
            <Row >
              <Col></Col>
              <OutputPlanList planList={getRatePlanList()}/>
              
              <Col><Button className="mx-2" variant="primary" onClick={handleShow}>{show?"Hide Filters":"Show Filters"}</Button></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FinderMain;
