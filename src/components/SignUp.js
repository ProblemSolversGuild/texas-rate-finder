import {Form, Button, Col, Container, Row} from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getRepList } from "../data/RepList";
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
  
  useEffect(()=> {getRepList({setRepList})},
    []
  )
  
  const onSubmit = async (e) => {
    e.preventDefault()
    let tmp_email = email?email:user.email
    console.log({tmp_email, esiid, meterNumber, electricProvider})
    const res = await fetch(uri + '/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({email:tmp_email, esiid, meter_number:meterNumber, current_rep_id:electricProvider})
      })
      res.status === 201 ? navigate('/app') : alert("Error saving " + res.status)
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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control disabled type="email"  placeholder="Enter email" defaultValue={user?user.email:null} onChange={(e) => setEmail(e.target.value)} /> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your ESIID (more info)</Form.Label>
        <Form.Control type="text" defaultValue={esiid} onChange={(e) => setEsiid(e.target.value)} />
        <Form.Text className="text-muted">
          Check your bill for this. If you can't find it, email kevin@theproblemsolversguild.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Meter Number (more info)</Form.Label>
        <Form.Control type="text" defaultValue={meterNumber} onChange={(e) => setMeterNumber(e.target.value)} />
        <Form.Text className="text-muted">
          Check your bill for this. If you can't find it, email kevin@theproblemsolversguild.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Current Electric Provider</Form.Label>
        <Form.Select type="text" defaultValue={electricProvider} onChange={(e) => setElectricProvider(e.target.value)}>
        <option disabled selected value> -- select your current Electric Provider -- </option>
        {repList && repList.map(rep => <option value={rep.rep_id}>{rep.rep_name}</option> )}
        </Form.Select>
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
