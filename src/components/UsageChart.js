import './react_vis_style.css'; 
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const UsageChart = () => {
    //TODO: Fetch data from data api
    const data = [
        {x: 0, y: 2},
        {x: 1, y: 3},
        {x: 2, y: 4},
        {x: 3, y: 5},
        {x: 4, y: 5},
        {x: 5, y: 5},
        {x: 6, y: 5},
        {x: 7, y: 4},
        {x: 8, y: 3},
        {x: 9, y: 2},
        {x: 10, y: 2},
        {x: 11, y: 2},
        {x: 12, y: 2},
        {x: 13, y: 3},
        {x: 14, y: 4},
        {x: 15, y: 4},
        {x: 16, y: 4},
        {x: 17, y: 3},
        {x: 18, y: 2},
        {x: 19, y: 1},
      ];
    return (
        <XYPlot
            width={900}
            height={300}>
            <VerticalGridLines width={10}/>
            <HorizontalGridLines />
            <XAxis title="Average Month" />
            <YAxis title="kWh" />
            <LineSeries data={data} color={'black'} />
            
        </XYPlot>
    );
}

export default UsageChart
