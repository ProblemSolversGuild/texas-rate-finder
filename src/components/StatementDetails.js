import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';


const StatementDetails = ({rp}) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
    <>
        <tr>
            <td className='text-end' key={rp.id}>${rp.total_price.toFixed(2)}</td>
            <td className='text-end' key={rp.id}>{rp.total_usage.toFixed(2)} kwh</td>
            <td className='text-end' key={rp.id}>${rp.price_per_kwh.toFixed(4)}</td>
            <td key={rp.id}>{rp.start_dttm.split('T')[0] }</td>
            <td key={rp.id}>{rp.end_dttm.split('T')[0]}</td>
            <td key={rp.id} onClick={()=>(setShowDetails(!showDetails))}><Button size='sm' variant='link'>{showDetails?"Hide":"Show"}</Button></td>
        </tr>
        {showDetails&&
        <tr>
            <td key={rp.id} colSpan={6}>
                <Table responsive bordered className='mt-2' >
                    <tbody>
                        {rp.detailed_charges.map((rc) => (
                        <tr>
                            <td className='text-end'>{rc.name}</td>
                            <td className='text-end'>${rc.charge.toFixed(2)}</td>
                        </tr>))}
                    </tbody>
                </Table>
            </td>                                                
        </tr>}
    </>
    );
}

export default StatementDetails