import './FinderMain.css';
import OutputPlanList from './components/OutputPlanList'
import UsageChart from './components/UsageChart'
import Sidebar from './components/Sidebar';
import CheckEmail from './components/CheckEmail'
import SignUp from './components/SignUp';
import { Button, Col, Row, Container, Offcanvas, ButtonGroup, Spinner, Toast } from 'react-bootstrap';

import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

import { getUsage, getFakeUsage } from './data/Usage';
import { getRatePlanList, getFakeRatePlanList } from './data/RatePlanList';
import { getUserInfo } from './data/UserInfo';


function FinderMain() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const uri = process.env.REACT_APP_URI;
  const uri_front = process.env.REACT_APP_FRONT;
  const [minRenewableContent, setMinRenewableContent] = useState(0);
  const [maxRenewableContent, setMaxRenewableContent] = useState(100);
  const [minContractLength, setMinContractLength] = useState(0);
  const [maxContractLength, setMaxContractLength] = useState(60);
  const [ratePlanList, setRatePlanList] = useState(null)
  const [ratePlanListLoading, setRatePlanListLoading] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [userEmailWarning, setUserEmailWarning] = useState(false)
  const [usage, setUsage] = useState([{'x':0,'y':0}])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)

  useEffect(()=> {isAuthenticated && getUserInfo({userEmail:user.email, setUserInfo:setUserInfo})},
    [isAuthenticated]
  )

  useEffect(()=> {userInfo && userInfo.esiid?getUsage({esiid:userInfo.esiid, setUsage, setUserEmailWarning}):getFakeUsage({esiid:'1008901023808934750100', setUsage})},
  [userInfo]
  )

  useEffect(()=> {userInfo && userInfo.esiid?getRatePlanList(userInfo.esiid, minContractLength, maxContractLength, minRenewableContent, maxRenewableContent, setRatePlanList, setRatePlanListLoading):getFakeRatePlanList('1008901023808934750100', minContractLength, maxContractLength, minRenewableContent, maxRenewableContent, setRatePlanList, setRatePlanListLoading)},
    [userInfo, minContractLength, maxContractLength,  minRenewableContent, maxRenewableContent]
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

          <Col xs={12} lg={12}>
            <Row className='py-5'></Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                {(userInfo && !userInfo.esiid && isAuthenticated)&&<Button variant="success" onClick={() => navigate('/SignUp')}>Connect Your Real Usage</Button>}
                {(!isAuthenticated)&&<Button variant="success" onClick={() => {loginWithRedirect({ screen_hint: "signup", redirectUri: uri_front+'#/SignUp'})}}>Create an Account!</Button>}
                {(isAuthenticated)&&<Button variant="success" href='https://donate.stripe.com/eVa16r91H0E21HOdQS' target="_blank">Donate</Button>}
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <UsageChart usageData={usage} />
              <Col></Col>
            </Row>
            <Row >
              <Col></Col>
              { ratePlanListLoading&&<Spinner animation="border" />}
              { ratePlanList && <OutputPlanList planList={ratePlanList} minContractLength={minContractLength} maxContractLength={maxContractLength} minRenewableContent maxRenewableContent />}
              <Col>{userInfo && ratePlanList && userInfo.esiid && <Button className="mx-1" variant="primary" onClick={handleShow}>{show?"Hide Plan Filters":"Show Plan Filters"}</Button>}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {userEmailWarning&&<CheckEmail />}
    </>
  );
}

export default FinderMain;
