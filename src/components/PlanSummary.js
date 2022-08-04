import { useState } from 'react';
import { Toast, ToastContainer, Modal, Button, Table, Accordion, Row, Alert } from 'react-bootstrap';
import StatementDetails from './StatementDetails';

const PlanSummary = ({plan, showPlanSummary, setShowPlanSummary}) => {
    const dow =  ['M','T','W','R','F','S','S']
    const uri = process.env.REACT_APP_URI;
    const [planReported, setPlanReported] = useState(false)
    const reportPlan = async (e) => {
        e.preventDefault()
        const res = await fetch(uri + '/plans/?status=new', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(plan)
        })
        console.log(res.status)
        setPlanReported(true)
    }

    return (
        <Modal centered show={showPlanSummary} onHide={() => setShowPlanSummary(!showPlanSummary)} size='lg' > 
            <Modal.Header closeButton >
                {plan.rep_company_display?plan.rep_company_display:plan.rep_company} - {plan.product_display?plan.product_display:plan.product}
            </Modal.Header>
            <Modal.Body>
                <Alert variant="info">If this tool saved you time or money, we would really appreciate a donation to help us continue improving the rate finder. If you aren't able to donate, tell your friends to check out our site! Lastly, if you have any feedback (positive or negative), we would love to hear from you.  Send an email to kevin@theproblemsolversguild.com</Alert>
                <Button className='mb-3 mx-1' href={plan.facts_url} target="_blank" >Electricity Facts Label (EFL)</Button>
                <Button className='mb-3 mx-1' href={plan.enroll_url} target="_blank" >Enrollment Link</Button>
                <Button className="mb-3 mx-1" href='https://donate.stripe.com/eVa16r91H0E21HOdQS' target="_blank">Donate Now</Button>
                <Button variant={planReported?'success':'danger'} className='mb-3 mx-1 float-end' size='sm' onClick={reportPlan} disabled={planReported}>{planReported?'Thank You!':'Report as Inaccurate'}</Button>
                <Accordion alwaysOpen defaultActiveKey={0} >
                    <Accordion.Item eventKey={3}>
                    <Accordion.Header>Sample bills for your past year of usage</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive className='mt-1' >
                            <thead className='text-center'>
                                <tr>
                                    <th>Price</th>
                                    <th>Usage</th>
                                    <th>$/kwh</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {plan.statement_breakdowns.map(breakdown_month => (
                                    <StatementDetails key={breakdown_month.start_dttm} rp={breakdown_month} />
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={1}>
                    <Accordion.Header>Plan Summary</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive bordered className='mt-2' >
                            <thead>
                                <tr>
                                    <th>Rate Component</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th>Min Kwh</th>
                                    <th>Max Kwh</th>
                                    <th>Days of Week</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plan.rate_components.map(rc => (
                                    <tr key={rc.name+rc.price}>
                                        <td>{rc.name}</td>
                                        <td>{rc.price?rc.price:rc.amount}</td>
                                        <td>{rc.class_name}</td>
                                        <td>{rc.min_kwh?rc.min_kwh:rc.min_thresh}</td>
                                        <td>{rc.max_kwh?rc.max_kwh:rc.max_thresh}</td>
                                        <td>{rc.days_of_week&&rc.days_of_week.map((_,d) => (dow[d]))}</td>
                                        <td>{rc.start_time}</td>
                                        <td>{rc.end_time}</td>
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
                                <tr>
                                    <th></th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cancelation Fee</td>
                                    <td>{plan.cancel_fee}</td>
                                </tr>
                                <tr>
                                    <td>Company Rating (5 is best)</td>
                                    <td>{!((typeof plan.rating === 'function') || (typeof plan.rating === 'object'))?plan.rating:"Not available"}</td>
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
