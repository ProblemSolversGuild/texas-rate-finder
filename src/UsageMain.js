import './FinderMain.css';
import OutputPlanList from './components/OutputPlanList'
import UsageChart from './components/UsageChart'
import UsageSidebar from './components/UsageSidebar';
import CheckEmail from './components/CheckEmail'
import SignUp from './components/SignUp';
import { Button, Col, Row, Container, Offcanvas, ButtonGroup, Spinner, Toast } from 'react-bootstrap';

import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

import { getUsage, getFakeUsage } from './data/Usage';
import { getRatePlanList, getFakeRatePlanList } from './data/RatePlanList';
import { getUserInfo } from './data/UserInfo';

function UsageMain() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [show, setShow] = useState(true);
  const { state } = useLocation();
  const uri = process.env.REACT_APP_URI;
  const uri_front = process.env.REACT_APP_FRONT;
  const [userInfo, setUserInfo] = useState(null)
  const [userEmailWarning, setUserEmailWarning] = useState(false)
  const [usage, setUsage] = useState([{'x':0,'y':0}])
  const [usageStartDate, setUsageStartDate] = useState(new Date('2021-07-29'))
  const [usageEndDate, setUsageEndDate] = useState(new Date('2022-07-28'))
  const [usageResolution, setUsageResolution] = useState('1_day')
  const [smoothAmt, setSmoothAmt] = useState(0)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(!show)

  useEffect(()=> {isAuthenticated && getUserInfo({userEmail:user.email, setUserInfo:setUserInfo})},
    [isAuthenticated]
  )

  useEffect(()=> {
    (userInfo && userInfo.esiid)?
      getUsage({esiid:userInfo.esiid, setUsage, setUserEmailWarning, usageStartDate:usageStartDate.toISOString().substring(0,10), usageEndDate:usageEndDate.toISOString().substring(0,10), usageResolution:usageResolution, smoothAmt:smoothAmt}):getFakeUsage({esiid:'1008901023808934750100', setUsage})},
  [userInfo, usageStartDate, usageEndDate, usageResolution, smoothAmt]
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
              <UsageSidebar usageStartDate={usageStartDate} setUsageStartDate={setUsageStartDate} usageEndDate={usageEndDate} setUsageEndDate={setUsageEndDate} 
                usageResolution={usageResolution} setUsageResolution={setUsageResolution} smoothAmt={smoothAmt} setSmoothAmt={setSmoothAmt} />
            </Offcanvas.Body>
          </Offcanvas>

          <Col xs={12} lg={12}>
            <Row className='py-2'></Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>

              </Col>
            </Row>
            <Row style={{height:'60rem'}}>
              <Col ></Col>
              <Col sm={12}>
                <UsageChart usageData={usage} usageStartDate={usageStartDate} usageEndDate={usageEndDate} />
                {userInfo && userInfo.esiid && <Button className="mx-0" variant="primary" onClick={handleShow}>{show?"Hide Usage Filters":"Show Usage Filters"}</Button>}
                {(isAuthenticated)&&<Button className="mx-2" variant="primary" href='https://donate.stripe.com/eVa16r91H0E21HOdQS' target="_blank">Donate</Button>}
                {(userInfo && !userInfo.esiid && isAuthenticated)&&<Button variant="success" onClick={() => navigate('/SignUp')}>Connect Your Real Usage</Button>}
                {(!isAuthenticated)&&<Button variant="success" onClick={() => {loginWithRedirect({ screen_hint: "signup", redirectUri: uri_front+'#/SignUp'})}}>Create an Account!</Button>}
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {userEmailWarning&&<CheckEmail />}
    </>
  );
}

export default UsageMain;
