import './react_vis_style.css'; 
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const UsageChart = ({ usageData }) => {
    return (
        <XYPlot
            xType="time"
            width={900}
            height={300}>
            <VerticalGridLines width={10}/>
            <HorizontalGridLines />
            <XAxis title="Average Month" />
            <YAxis title="kWh" />
            <LineSeries data={usageData} color={'black'} />
            
        </XYPlot>
    );
}

export default UsageChart
