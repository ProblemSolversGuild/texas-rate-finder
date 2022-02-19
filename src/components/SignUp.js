import {Form, Button, Col, Container, Row} from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const uri = process.env.REACT_APP_URI;
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [email, setEmail] = useState('')
  const [esiid, setEsiid] = useState('1111111111111111111111')
  const [meterNumber, setMeterNumber] = useState('11111111')
  const [electricProvider, setElectricProvider] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log({email, esiid, meterNumber, electricProvider})
    const res = await fetch(uri + '/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({email, esiid, meterNumber, electricProvider})
      })
      res.status === 201 ? navigate('/app') : alert("Error saving {res.status}")
      console.log(res)
    }

  return (
    <>
    <Container fluid>
      <Row>
        <Col></Col>
    <Col className="justify-content-center">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} /> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your ESIID</Form.Label>
        <Form.Control type="text" defaultValue={esiid} onChange={(e) => setEsiid(e.target.value)} />
        <Form.Text className="text-muted">
          Check your bill for this. If you can't find it, email kevin@theproblemsolversguild.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Meter Number</Form.Label>
        <Form.Control type="text" defaultValue={meterNumber} onChange={(e) => setMeterNumber(e.target.value)} />
        <Form.Text className="text-muted">
          Check your bill for this. If you can't find it, email kevin@theproblemsolversguild.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Current Electric Provider</Form.Label>
        <Form.Control type="text" defaultValue={electricProvider} onChange={(e) => setElectricProvider(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Sign Up
      </Button>
    </Form>
    </Col>
    <Col></Col>
    </Row>
    </Container>
    </>
  );
}

export default SignUp;
