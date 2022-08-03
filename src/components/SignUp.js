import {Form, Button, Col, Container, Row, Alert} from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getRepList } from "../data/RepList";
import { getUserInfo } from '../data/UserInfo';

function SignUp() {
  const uri = process.env.REACT_APP_URI;
  const navigate = useNavigate()
  const [clientSecret, setClientSecret] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [email, setEmail] = useState(user?user.email:null)
  const [esiid, setEsiid] = useState(null)
  const [meterNumber, setMeterNumber] = useState(null)
  const [electricProvider, setElectricProvider] = useState('')
  const [repList, setRepList] = useState(null)
  const [validated, setValidated] = useState(false);
  const [userInfo, setUserInfo] = useState(null)
  const [errorPopup, setErrorPopup] = useState(false)

  useEffect(() => {isAuthenticated && getUserInfo({userEmail:user.email, setUserInfo:setUserInfo})},
    [isAuthenticated]
  )

  useEffect(() => {userInfo && setElectricProvider(userInfo.current_rep_id)},
    [userInfo]
  )

  useEffect(()=> {getRepList({setRepList})},
    []
  )
  
  const onSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    e.preventDefault()
    let tmp_email = email?email:user.email
    let tmp_esiid = esiid?esiid:userInfo.esiid
    let tmp_meter_number = meterNumber?meterNumber:userInfo.meter_number
    let tmp_current_rep_id = electricProvider?electricProvider:userInfo.current_rep_id
    console.log({tmp_email, tmp_esiid, tmp_meter_number, tmp_current_rep_id})
    const res = await fetch(uri + '/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({email:tmp_email, esiid:tmp_esiid, meter_number:tmp_meter_number, current_rep_id:tmp_current_rep_id})
      })
      switch(res.status) {
        case 201:
          navigate('/app', {state: {fromSignUp:true}})
          break
        case 412:
          setErrorPopup(true)
          break;
        default:
          alert("Error saving " + res.status)
      }
    }
  return (
    <>
    <Container fluid>
    <Row>
    <Alert variant='success'>Once you click on the save button, you will receive an email from Smart Meter Texas.  Click on the 'Confirm' link to authorize us to view your usage.</Alert>

    <Col></Col>
    <Col className="justify-content-center" lg={8} xl={6}>
    <Form validated={validated} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control disabled type="email"  placeholder="Enter email" defaultValue={user?user.email:null} onChange={(e) => setEmail(e.target.value)} /> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your ESID</Form.Label>
        <Form.Control required type="text" defaultValue={userInfo?userInfo.esiid:esiid} onChange={(e) => setEsiid(e.target.value)} />
        <Form.Text className="text-muted">
          Check your bill for this. If you can't find it, email kevin@theproblemsolversguild.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Meter Number</Form.Label>
        <Form.Control required type="text" defaultValue={userInfo?userInfo.meter_number:meterNumber} onChange={(e) => setMeterNumber(e.target.value)} />
        <Form.Text className="text-muted">
          Check your bill for this. If you can't find it, email kevin@theproblemsolversguild.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Current Electric Provider</Form.Label>
        <Form.Control required as="select" type="select" name="electric_provider" value={electricProvider} onChange={(e) => setElectricProvider(e.target.value)} >
          <option value="">- select your current Electric Provider -</option>
          {repList && repList.map(rep => <option key={rep.rep_id+rep.rep_name} value={rep.rep_id}>{rep.rep_name}</option> )}
        </Form.Control>
      </Form.Group>
      {errorPopup&&<Alert variant="danger">The combination of ESID, Meter Number, and Current Electric Provider is not accurate according to the Smart Meter Texas System. Please double-check everything matches your most recent bill. If the problem persists, send an email to kevin@theproblemsolversguild.com with an attached bill for further troubleshooting.</Alert>}
      <Button variant="primary" type="submit">
        Save
      </Button>
      <Button variant="" onClick={() => navigate("/app")}>Cancel</Button>

    </Form>
    </Col>
    <Col></Col>
    </Row>
    </Container>
    </>
  );
}

export default SignUp;
