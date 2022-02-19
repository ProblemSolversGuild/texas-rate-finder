import './FinderMain.css';
import OutputPlanList from './components/OutputPlanList'
import UsageChart from './components/UsageChart'
import Sidebar from './components/Sidebar';
import SignUp from './components/SignUp';
import { Button, Col, Row, Container, Offcanvas, ButtonGroup } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

import { getUsage } from './data/Usage';
import { getRatePlanList } from './data/RatePlanList';
import { getUserInfo } from './data/UserInfo';

function FinderMain() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [show, setShow] = useState(false);

  const [minRenewableContent, setMinRenewableContent] = useState(0);
  const [maxRenewableContent, setMaxRenewableContent] = useState(100);
  const [minContractLength, setMinContractLength] = useState(0);
  const [maxContractLength, setMaxContractLength] = useState(60);
  const [ratePlanList, setRatePlanList] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)

  useEffect(()=> {isAuthenticated && getUserInfo({userEmail:user.email, setUserInfo:setUserInfo})},
    [isAuthenticated]
  )

  useEffect(()=> {getRatePlanList(setRatePlanList)},
    []
  )

  return (
    <>
      <Container fluid>
        <Row>
          
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar minRenewableContent={minRenewableContent} maxRenewableContent={maxRenewableContent} 
                       setMinRenewableContent={setMinRenewableContent} setMaxRenewableContent={setMaxRenewableContent} 
                       minContractLength={minContractLength} maxContractLength={maxContractLength} 
                       setMinContractLength={setMinContractLength} setMaxContractLength={setMaxContractLength} />
            </Offcanvas.Body>
          </Offcanvas>

          <Col xs={12}>
            <Row className='py-5'></Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                {(!userInfo && isAuthenticated)&&<Button variant="success" onClick={() => navigate('/SignUp')}>Connect Your Real Usage</Button>}
                {(!isAuthenticated)&&<Button variant="success" onClick={() => {loginWithRedirect({redirect_uri: 'http://kbird-desktop:3001/app'})}}>Create an Account!</Button>}
              </Col>
            </Row>
            <Row>
              <Col></Col>
              {userInfo?<UsageChart usageData={getUsage({esiid:userInfo.esiid})} />:
              <UsageChart usageData={getUsage({esiid:""})} />}
              <Col></Col>
            </Row>
            <Row >
              <Col></Col>
              { ratePlanList && <OutputPlanList planList={ratePlanList} />}
              
              <Col><Button className="mx-1" variant="primary" onClick={handleShow}>{show?"Hide Plan Filters":"Show Plan Filters"}</Button></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FinderMain;
