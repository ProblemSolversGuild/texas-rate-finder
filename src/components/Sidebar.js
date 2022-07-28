import React from "react";
import {Form, InputGroup, Col, Row, Button} from "react-bootstrap";
import { useState } from "react";
import '../FinderMain.css'

const Sidebar = ({minRenewableContent, 
                    maxRenewableContent, 
                    setMinRenewableContent, 
                    setMaxRenewableContent,
                    minContractLength, 
                    maxContractLength, 
                    setMinContractLength, 
                    setMaxContractLength,
                    showCancelation,
                    setShowCancelation
                }) => {
                    const [localMinContractLength, setLocalMinContractLength] = useState(minContractLength)
                    const [localMaxContractLength, setLocalMaxContractLength] = useState(maxContractLength)
                    const [localMinRenewableContent, setLocalMinRenewableContent] = useState(minRenewableContent)
                    const [localMaxRenewableContent, setLocalMaxRenewableContent] = useState(maxRenewableContent)

                    const onSubmit = (e) => {
                        e.preventDefault()
                        setMinContractLength(localMinContractLength)
                        setMaxContractLength(localMaxContractLength)
                        setMinRenewableContent(localMinRenewableContent)
                        setMaxRenewableContent(localMaxRenewableContent)
                      }
    return (
        <>
            
            <Col> {/* className="col-md-2 d-none d-md-block bg-light sidebar"> */}
                <Form className="mx-3" onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Renewable Content</Form.Label>
                        <InputGroup >
                            <Form.Control defaultValue={minRenewableContent} type="text" onChange={(e) => setLocalMinRenewableContent(e.target.value)} />
                            <InputGroup.Text> to </InputGroup.Text>
                            <Form.Control defaultValue={maxRenewableContent} type="text" onChange={(e) => setLocalMaxRenewableContent(e.target.value)} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contract Length (Months)</Form.Label>
                        <InputGroup >
                            <Form.Control type="text" defaultValue={localMinContractLength} onChange={(e) => setLocalMinContractLength(e.target.value)} /> 
                            <InputGroup.Text> to </InputGroup.Text>
                            <Form.Control type="text" defaultValue={localMaxContractLength} onChange={(e) => setLocalMaxContractLength(e.target.value)} /> 
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check inline type="switch" defaultValue={showCancelation} onChange={(e) => setShowCancelation(e.target.checked)} />
                        <Form.Label>Show Cancelation Fees</Form.Label>  
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