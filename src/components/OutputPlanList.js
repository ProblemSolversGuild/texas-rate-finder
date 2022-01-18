import { Card, CardGroup } from 'react-bootstrap'

const OutputPlanList = () => {

    return (
        <>
        {/* <CardGroup className='mx-auto'> */}
            <Card className='col-md-2 px-0 mx-1'>
                <Card.Body>
                    <Card.Title>Rate Plan 1</Card.Title>
                    <Card.Text>$0.10/kWh</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>Reliant Energy</small>
                </Card.Footer>
            </Card>
            <Card className='col-md-2 px-0 mx-1'>
                <Card.Body>
                    <Card.Title>Rate Plan 2</Card.Title>
                    <Card.Text>$0.13/kWh</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>Amigo Energy</small>
                </Card.Footer>
            </Card>
            <Card className='col-md-2 px-0 mx-1'>
                <Card.Body>
                    <Card.Title>Rate Plan 3</Card.Title>
                    <Card.Text>$0.20/kWh</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>Ambit Energy</small>
                </Card.Footer>
            </Card>
        {/* </CardGroup> */}
        </>
    );
}

export default OutputPlanList
