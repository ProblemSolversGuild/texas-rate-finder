import './react_vis_style.css'; 
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, DecorativeAxis} from 'react-vis';

const UsageChart = ({ usageData }) => {
    return (
        <XYPlot
            xType="time"
            width={900}
            height={300}>
            <VerticalGridLines width={10}/>
            <HorizontalGridLines tickTotal={3}/>
            <XAxis title="Past Week" tickLabelAngle={-30} />
            <YAxis title="kWh" />
            <LineSeries data={usageData.map(d => ({"x":new Date(d['x']),"y":d['y']}))} color={'black'} />
        </XYPlot>
    );
}
// 
export default UsageChart
