import {Form, Button, Col, Container, Row} from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getRepList } from "../data/RepList";
import { getUserInfo } from '../data/UserInfo';
import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe("pk_test_51KtkY6IKsit4k2HPsGm7CvidiYQH85rBYd4Z8fuWRkLoq8O6EnkfghykSBkajfWGhEVPqFXtIJhRoKtlk0wpLwlK00xvTDVAVw");

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

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads (from https://stripe.com/docs/payments/quickstart)
  //   fetch(uri + "/create-payment-intent/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: "month" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);
  useEffect(()=> {isAuthenticated && getUserInfo({userEmail:user.email, setUserInfo:setUserInfo})},
    [isAuthenticated]
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
    console.log({tmp_email, esiid, meterNumber, electricProvider})
    const res = await fetch(uri + '/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({email:tmp_email, esiid:tmp_esiid, meter_number:tmp_meter_number, current_rep_id:tmp_current_rep_id})
      })
      res.status === 201 ? navigate('/app', {state: {fromSignUp:true}}) : alert("Error saving " + res.status)
      console.log(res)
    }

    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };

  return (
    <>
    <Container fluid>
      {/* <Row>
      <Col></Col>
      <Col>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
      </Col>
      <Col></Col>
    </Row> */}
    <Row>
    <Col></Col>
    <Col className="justify-content-center">
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
        <Form.Select type="text" defaultValue={userInfo?userInfo.current_rep_id:electricProvider} onChange={(e) => setElectricProvider(e.target.value)}>
        <option disabled value selected={false}> -- select your current Electric Provider -- </option>
        {console.log(userInfo&&userInfo.current_rep_id)}
        {repList && repList.map(rep => <option value={rep.rep_id} selected={userInfo&&rep.rep_id===userInfo.current_rep_id?true:false} >{rep.rep_name}</option> )}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
         {/* onClick={onSubmit} > */}
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
