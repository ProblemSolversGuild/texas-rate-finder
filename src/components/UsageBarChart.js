import {BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer, Label} from 'recharts'

const UsageBarChart = ({ usageData }) => {
    return (
        <ResponsiveContainer className={'align-items-center'} width={'100%'} height={'85%'}>
            <BarChart
                data={usageData}
                >
                <XAxis angle={-10} dataKey={'x'} tickFormatter={d => new Date(d).toLocaleDateString()}/>
                <YAxis ><Label value={"kWh"} position={'insideTopRight'} offset={20} /></YAxis>
                <Tooltip /> 
                <Bar type="monotone" dataKey="y" fill='#82ca9d' stroke='gray' dot={false} />
            </BarChart>
        </ResponsiveContainer>
    );
}
// 
export default UsageBarChart
