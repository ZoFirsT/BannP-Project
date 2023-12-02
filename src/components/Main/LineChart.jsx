import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import chartData from './data/chart_data.json';

const MyLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid stroke="#d1d5db" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                    cursor={{ stroke: '#6b7280', strokeWidth: 1 }}
                    contentStyle={{
                        backgroundColor: 'white',
                        borderColor: '#d1d5db',
                        borderRadius: '0.5rem',
                    }}
                    itemStyle={{
                        color: '#6b7280',
                    }}
                />
                <Legend wrapperStyle={{ color: '#374151' }} />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#6366f1"
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#34d399"
                />
            </RechartsLineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;
