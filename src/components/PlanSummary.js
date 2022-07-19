import { Toast, ToastContainer, Modal, Button, Table, Accordion, Row } from 'react-bootstrap';
import { useState } from 'react';

const PlanSummary = ({plan, showPlanSummary, setShowPlanSummary}) => {
    const [showToast, setShowToast] = useState(true);
    const dow =  ['M','T','W','R','F','S','S']
    console.log(plan)
    return (
        <Modal  centered show={showPlanSummary} onHide={() => setShowPlanSummary(!showPlanSummary)} size='lg' > 
            <Modal.Header closeButton >
                {plan.rep_company} - {plan.product}
            </Modal.Header>
            <Modal.Body>
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey={0} >
                        <Accordion.Header>Document Links</Accordion.Header>
                        <Accordion.Body>
                            <Button className='mx-1' href={plan.facts_url} target="_blank" >Electricity Facts Label (EFL)</Button>
                            <Button className='mx-1' href={plan.enroll_url} target="_blank" >Enrollment Link</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={1}>
                    <Accordion.Header>Price Breakdown</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive bordered className='mt-2' >
                            <thead>
                                <th>Rate Component</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Min Kwh</th>
                                <th>Max Kwh</th>
                                <th>Days of Week</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </thead>
                            <tbody>
                                {plan.rate_components.map(rc => (
                                    <tr>
                                        <td key={rc.id}>{rc.name}</td>
                                        <td key={rc.id}>{rc.price?rc.price:rc.amount}</td>
                                        <td key={rc.id}>{rc.class_name}</td>
                                        <td key={rc.id}>{rc.min_kwh}</td>
                                        <td key={rc.id}>{rc.max_kwh}</td>
                                        <td key={rc.id}>{rc.days_of_week&&rc.days_of_week.map((_,d) => (dow[d]))}</td>
                                        <td key={rc.id}>{rc.start_time}</td>
                                        <td key={rc.id}>{rc.end_time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={2}>
                    <Accordion.Header>More Info</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive bordered className='mt-2'>
                            <thead>
                                <th></th>
                                <th>Details</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cancelation Fee</td>
                                    <td>{plan.cancel_fee}</td>
                                </tr>
                                <tr>
                                    <td>Company Rating (5 is best)</td>
                                    <td>{plan.rating}</td>
                                </tr>
                                <tr>
                                    <td>Special Terms</td>
                                    <td>{!((typeof plan.special_terms === 'function') || (typeof plan.special_terms === 'object'))?plan.special_terms:"No special terms"}</td>
                                </tr>
                                <tr>
                                    <td>REP Terms of Service</td>
                                    <td><a href={plan.terms_url} target="_blank">{plan.terms_url}</a></td>
                                </tr>
                                <tr>
                                    <td>Your Rights as a Customer</td>
                                    <td><a href={plan.yrac_url} target="_blank">{plan.yrac_url}</a></td>
                                </tr>
                                <tr>
                                    <td>Enroll Phone #</td>
                                    <td>{plan.enroll_phone}</td>
                                </tr>
                                <tr>
                                    <td>Renewable %</td>
                                    <td>{plan.renewable}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShowPlanSummary(!showPlanSummary)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PlanSummary
