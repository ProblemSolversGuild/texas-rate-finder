import {LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer, Label} from 'recharts'

const UsageChart = ({ usageData }) => {
    return (
        <ResponsiveContainer className={'align-items-center'} width={'100%'} height={'100%'}>
            <LineChart
                data={usageData}
                >
                <XAxis angle={-10} dataKey={'x'} tickFormatter={d => new Date(d).toLocaleDateString()}/>
                <YAxis ><Label value={"kWh"} position={'insideTopRight'} offset={20} /></YAxis>
                <Tooltip /> 
                <Line type="monotone" dataKey="y" stroke="black" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
// 
export default UsageChart
