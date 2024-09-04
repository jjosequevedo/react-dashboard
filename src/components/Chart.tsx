import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

const data: ChartData[] = [
  { name: 'January', value: 400 },
  { name: 'February', value: 300 },
  { name: 'March', value: 200 },
  { name: 'April', value: 278 },
];

const Chart: React.FC = () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default Chart;
