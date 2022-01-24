import {Form, Button, Col, Container, Row} from "react-bootstrap";

function SignUp() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col></Col>
    <Col className="justify-content-center">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your ESIID</Form.Label>
        <Form.Control type="text" placeholder="11111111111111111111" />
        <Form.Text className="text-muted">
          Check your bill for this or just skip it and we will help you figure it out
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Meter Number</Form.Label>
        <Form.Control type="text" placeholder="1111111" />
        <Form.Text className="text-muted">
          Check your bill for this or just skip it and we will help you figure it out
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Current Electric Provider</Form.Label>
        <Form.Control type="text" placeholder="Probably should be a dropdown" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Additional Comments</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>

      <Button variant="primary" type="submit">
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
