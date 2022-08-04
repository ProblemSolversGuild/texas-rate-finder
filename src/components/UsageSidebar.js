import React from "react";
import {Form, InputGroup, Col, Row, Button, ButtonGroup, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import { parseISO } from 'date-fns'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../FinderMain.css'

const UsageSidebar = ({ usageStartDate, setUsageStartDate, usageEndDate, setUsageEndDate, usageResolution, setUsageResolution, smoothAmt, setSmoothAmt, chartType, setChartType }) => {
    return (
        <>
            <Col>
                <Form className="mx-3">

                    <Form.Group className="mb-3">
                        <Form.Label>Chart Style</Form.Label>
                        <InputGroup >
                            <ToggleButtonGroup defaultValue={[chartType]} name={'chartType'} onChange={value => setChartType(value)}>
                                <ToggleButton id={'chartType-1'} name={'chartType'} value={'line'} variant="outline-secondary" >Line Chart</ToggleButton>
                                <ToggleButton id={'chartType-2'} name={'chartType'} value={'bar'} variant="outline-secondary" >Bar Chart</ToggleButton>
                                <ToggleButton id={'chartType-3'} name={'chartType'} value={'table'} variant="outline-secondary" >Table</ToggleButton>
                            </ToggleButtonGroup>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Chart Resolution</Form.Label>
                        <InputGroup >
                            <ToggleButtonGroup defaultValue={[usageResolution]} name={'usageResolution'} onChange={value => setUsageResolution(value)}>
                                <ToggleButton id={'usageResolution-1'} name={'usageResolution'} value={''} variant="outline-secondary" >15 minute</ToggleButton>
                                <ToggleButton id={'usageResolution-2'} name={'usageResolution'} value={'1_hour'} variant="outline-secondary" >1 hour</ToggleButton>
                                <ToggleButton id={'usageResolution-3'} name={'usageResolution'} value={'1_day'} variant="outline-secondary" >1 day</ToggleButton>
                                <ToggleButton id={'usageResolution-4'} name={'usageResolution'} value={'1_month'} variant="outline-secondary" >1 month</ToggleButton>
                            </ToggleButtonGroup>
                        </InputGroup>
                    </Form.Group>  
                    <Form.Group className="mb-3">
                        <Form.Label>Beginning Date Range</Form.Label>
                        <InputGroup> 
                            <DatePicker selected={usageStartDate} onChange={(date) => setUsageStartDate(date)} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>End Date Range</Form.Label>
                        <InputGroup> 
                            <DatePicker selected={usageEndDate} onChange={(date) => setUsageEndDate(date)} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Smoothing Amount</Form.Label>
                        <InputGroup >
                            <Form.Control type="text" defaultValue={smoothAmt} onChange={(e) => setSmoothAmt(e.target.value)} /> 
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Col>
        </>
        );
  };

  export default UsageSidebar