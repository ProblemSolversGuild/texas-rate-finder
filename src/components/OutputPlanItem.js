import { Card } from 'react-bootstrap'

const OutputPlanItem = ( { plan }) => {
    const pn_length = 20;
    //https://www.w3schools.com/howto/howto_css_flip_card.asp maybe would be cool to show information on the 'back' of the card like this?
    return (
            <Card className='col-md-1 px-0 mx-1'>
                <Card.Body>
                    <Card.Title data-toggle="tooltip" data-placement="top" title={plan.plan_name} >{plan.plan_name.length > pn_length? plan.plan_name.substring(0,pn_length)+"...":plan.plan_name}</Card.Title>
                    <Card.Text>${plan.plan_$_per_kwh.toFixed(3)}/kWh</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>{plan.rep_company}</small>
                </Card.Footer>
            </Card>
    );
}

export default OutputPlanItem
