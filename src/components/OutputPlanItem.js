import { Card } from 'react-bootstrap'

const OutputPlanItem = ( { plan }) => {
    const pn_length = 20;
    //https://www.w3schools.com/howto/howto_css_flip_card.asp maybe would be cool to show information on the 'back' of the card like this?
    return (
            <Card className='col-md-1 px-0 mx-1'>
                <Card.Body>
                    <Card.Title data-toggle="tooltip" data-placement="top" title={plan.product} >{plan.product.length > pn_length? plan.product.substring(0,pn_length)+"...":plan.product}</Card.Title>
                    <Card.Text>${plan.plan_$_per_kwh.toFixed(3)}/kWh</Card.Text>
                    {/* <Card.Link href="#">Signup Link</Card.Link> */}
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>{plan.rep_company}</small><br/>
                    <Card.Link href={plan.facts_url} target="_blank">More Info</Card.Link>
                </Card.Footer>
            </Card>
    );
}

export default OutputPlanItem
