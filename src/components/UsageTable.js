import { Table } from "react-bootstrap";

const UsageTable = ({ usageData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Usage (kWh)</th>
                </tr>
                </thead>
                <tbody>
                {usageData.map(dataPoint => (
                    <tr key={dataPoint.x}>
                        <td>{dataPoint.x.replace(/T/g, ' ')}</td>
                        <td>{dataPoint.y}</td>
                    </tr>
                    ))}
            </tbody>
      </Table>
    );
}
// 
export default UsageTable
