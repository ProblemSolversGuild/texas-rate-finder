import { Card, CardGroup } from 'react-bootstrap'

const OutputPlanList = ( { planList }) => {
    const pn_length = 20;
    const display_n_items = 5;
    return (
        <>
        {/* <CardGroup> */}
            {planList.slice(0,display_n_items).map(plan => (
                <Card className='col-md-1 px-0 mx-1'>
                <Card.Body>
                    <Card.Title data-toggle="tooltip" data-placement="top" title={plan.plan_name} >{plan.plan_name.length > pn_length? plan.plan_name.substring(0,pn_length)+"...":plan.plan_name}</Card.Title>
                    <Card.Text>${plan.plan_$_per_kwh.toFixed(3)}/kWh</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>{plan.rep_company}</small>
                </Card.Footer>
            </Card>
            ))
            }
        {/* </CardGroup> */}
        </>
    );
}

export default OutputPlanList
