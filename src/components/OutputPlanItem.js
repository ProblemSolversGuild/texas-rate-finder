import { Button, Card } from 'react-bootstrap'
import PlanSummary from './PlanSummary';
import { InfoCircle } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const OutputPlanItem = ( { plan }) => {
    const [showPlanSummary,setShowPlanSummary]=useState(false)
    const pn_length = 65;
    const uri_front = process.env.REACT_APP_FRONT;
    const { user, loginWithRedirect } = useAuth0();
    var product_name = plan.product.replace(/_/g, ' ')
    //https://www.w3schools.com/howto/howto_css_flip_card.asp maybe would be cool to show information on the 'back' of the card like this?
    return (
        <>
            <Card className='col-xl-2 px-0 mx-1'>
                <Card.Body>
                    <Card.Title data-toggle="tooltip" data-placement="top" title={product_name} >{product_name.length > pn_length? product_name.substring(0,pn_length)+"...":product_name}</Card.Title>
                    <Card.Text>${plan.plan_$_per_kwh.toFixed(3)}/kWh</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>{plan.rep_company}</small><br/>
                    <Button className='px-0 mx-0 border-0' size='sm' variant='link' onClick={plan.product.includes("Sample Plan")?() => {loginWithRedirect({ screen_hint: "signup", redirectUri: uri_front+'#/SignUp'})}:()=>setShowPlanSummary(!showPlanSummary)} >{plan.product.includes("Sample Plan")?'Create a free account to connect your real usage':'Details'}</Button>
                </Card.Footer>
            </Card>
            {showPlanSummary && <PlanSummary plan={plan} showPlanSummary setShowPlanSummary={setShowPlanSummary} />}
        </>
    );
}

export default OutputPlanItem
