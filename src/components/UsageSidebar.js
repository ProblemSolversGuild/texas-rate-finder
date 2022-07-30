import React from "react";
import {Form, InputGroup, Col, Row, Button, ButtonGroup} from "react-bootstrap";
import { parseISO } from 'date-fns'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../FinderMain.css'

const UsageSidebar = ({ usageStartDate, setUsageStartDate, usageEndDate, setUsageEndDate, usageResolution, setUsageResolution, smoothAmt, setSmoothAmt }) => {
                    const [localUsageResolution, setLocalusageResolution] = useState(usageResolution)
                    const [localUsageStartDate, setLocalUsageStartDate] = useState(usageStartDate)
                    const [localUsageEndDate, setLocalUsageEndDate] = useState(usageEndDate)

                    const onSubmit = (e) => {
                        e.preventDefault()
                        setUsageResolution(localUsageResolution)
                        setUsageStartDate(localUsageStartDate)
                        setUsageEndDate(localUsageEndDate)
                      }
                      console.log(usageStartDate)
                      console.log(usageEndDate)
    return (
        <>
            
            <Col> {/* className="col-md-2 d-none d-md-block bg-light sidebar"> */}
                <Form className="mx-3" onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Chart Resolution</Form.Label>
                        <InputGroup >
                            <ButtonGroup>
                                <Button variant="outline-secondary" onClick={e=>setUsageResolution(null)}>15 minute</Button>
                                <Button variant="outline-secondary" onClick={e=>setUsageResolution('1_hour')}>1 hour</Button>
                                <Button variant="outline-secondary" onClick={e=>setUsageResolution('1_day')}>1 day</Button>
                                <Button variant="outline-secondary" onClick={e=>setUsageResolution('1_month')}>1 month</Button>
                            </ButtonGroup>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date Range</Form.Label>
                        <InputGroup> 
                            <DatePicker selected={usageStartDate} onChange={(date) => setUsageStartDate(date)} />
                            <InputGroup.Text> to </InputGroup.Text>
                            <DatePicker selected={usageEndDate} onChange={(date) => setUsageEndDate(date)} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Smoothing Amount</Form.Label>
                        <InputGroup >
                            <Form.Control type="text" defaultValue={smoothAmt} onChange={(e) => setSmoothAmt(e.target.value)} /> 
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

  export default UsageSidebar