import React from "react";
import {Form, InputGroup, Col, Row, Button} from "react-bootstrap";
import '../FinderMain.css'

const Sidebar = ({minRenewableContent, 
                    maxRenewableContent, 
                    setMinRenewableContent, 
                    setMaxRenewableContent,
                    minContractLength, 
                    maxContractLength, 
                    setMinContractLength, 
                    setMaxContractLength
                }) => {
    return (
        <>
            
            <Col> {/* className="col-md-2 d-none d-md-block bg-light sidebar"> */}
                <Form className="mx-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Renewable Content</Form.Label>
                        <InputGroup >
                            <Form.Control defaultValue={minRenewableContent} type="text" onChange={setMinRenewableContent} />
                            <InputGroup.Text> to </InputGroup.Text>
                            <Form.Control defaultValue={maxRenewableContent} type="text" onChange={setMaxRenewableContent} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contract Length (Months)</Form.Label>
                        <InputGroup >
                            <Form.Control type="text" defaultValue={minContractLength} onChange={setMinContractLength} />
                            <InputGroup.Text> to </InputGroup.Text>
                            <Form.Control type="text" defaultValue={maxContractLength} onChange={setMaxContractLength} />
                        </InputGroup>
                    </Form.Group>

                    <Row>
                        <Col></Col><Col><Button variant="primary" type="submit">Refresh Plan List</Button></Col>
                    </Row>
                </Form>
            </Col>
        </>
        );
  };
//   const Sidebar = withRouter(Side);
  export default Sidebar