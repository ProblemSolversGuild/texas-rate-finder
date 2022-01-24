import React from "react";
import {Form, InputGroup, Col, Row, Button} from "react-bootstrap";
import '../FinderMain.css'

const Sidebar = props => {
    return (
        <>
            
            <Col> {/* className="col-md-2 d-none d-md-block bg-light sidebar"> */}
                <Form className="mx-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Renewable Content</Form.Label>
                        <InputGroup >
                            <Form.Control type="text" />
                            <InputGroup.Text> to </InputGroup.Text>
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contract Lenth (Months)</Form.Label>
                        <InputGroup >
                            <Form.Control type="text" />
                            <InputGroup.Text> to </InputGroup.Text>
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>

                    <Row>
                        <Col></Col><Col><Button variant="primary" type="submit">Update Filters</Button></Col>
                    </Row>
                </Form>
            </Col>
        </>
        );
  };
//   const Sidebar = withRouter(Side);
  export default Sidebar