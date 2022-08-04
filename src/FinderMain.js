import './FinderMain.css';
import OutputPlanList from './components/OutputPlanList'
import UsageChart from './components/UsageChart'
import Sidebar from './components/Sidebar';
import CheckEmail from './components/CheckEmail'
import SignUp from './components/SignUp';
import { Button, Col, Row, Container, Offcanvas, ButtonGroup, Spinner, Toast, Alert } from 'react-bootstrap';

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
  const [showCancelation, setShowCancelation] = useState(false)
  const [usageIsLoading, setUsageIsLoading] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)

  useEffect(()=> {isAuthenticated && getUserInfo({userEmail:user.email, setUserInfo:setUserInfo})},
    [isAuthenticated]
  )

  useEffect(()=> {userInfo && userInfo.esiid?getUsage({esiid:userInfo.esiid, setUsage, setUserEmailWarning, setUsageIsLoading:setUsageIsLoading}):getFakeUsage({esiid:'1008901023808934750100', setUsage, setUsageIsLoading:setUsageIsLoading})},
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
                       setMinContractLength={setMinContractLength} setMaxContractLength={setMaxContractLength} 
                       showCancelation={showCancelation} setShowCancelation={setShowCancelation}
                    />
            </Offcanvas.Body>
          </Offcanvas>
          {(isAuthenticated&&(usageIsLoading||ratePlanListLoading))&&<Alert variant='warning'>This page can take a while to load.  If you aren't seeing anything after 3 minutes, email kevin@theproblemsolversguild.com</Alert>}

          <Col xs={12} lg={12}>
          <Row className='pt-4'>
              <Col></Col>
              <Col xl={9} xxl={6}>
                {(userInfo && !userInfo.esiid && isAuthenticated)&&<Button variant="success" onClick={() => navigate('/SignUp')}>Connect Your Real Usage</Button>}
                {(!isAuthenticated)&&<Button variant="success" onClick={() => {loginWithRedirect({ screen_hint: "signup", redirectUri: uri_front+'#/SignUp'})}}>Create an Account to connect your real usage!</Button>}
              </Col>
              <Col></Col>
            </Row>
            <Row className='pt-2' style={{height:'25rem'}}>
              <Col></Col>
              <Col xl={9} xxl={6} className='text-center' >
                {usageIsLoading&&<Spinner animation="border" variant="secondary" />}
                {!usageIsLoading&&<UsageChart usageData={usage} />}
              </Col>
              <Col></Col>
            </Row>
            <Row className='pt-1'>
              <Col className='px-0'></Col>
              <Col className='px-0' xl={9} xxl={8}>
                {userInfo && ratePlanList && userInfo.esiid && <Button className="mx-0" variant="primary" onClick={handleShow}>{show?"Hide Filters":"Show Filters"}</Button>}
              </Col>
              <Col></Col>
            </Row> 
            <Row className='mt-2'>
              <Col></Col>
              { ratePlanListLoading&&<Spinner animation="border" variant="secondary" />}
              { ratePlanList && <OutputPlanList planList={ratePlanList} showCancelation={showCancelation} />}
              <Col>
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
