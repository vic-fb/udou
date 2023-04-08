import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

function Chart({ data }) { // label={yLabel}
  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={40} />
        <YAxis yAxisId="left" domain={['auto', 'auto']} />
        {/* //label={yLabel} */}
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} connectNulls isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
