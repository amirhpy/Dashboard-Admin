import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Database
import { eChartData } from '../../../Database/database'

const EChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%" aspect={2}>
            <LineChart
                width={500}
                height={300}
                data={eChartData}
            >
                <CartesianGrid strokeDasharray="1" />
                <XAxis dataKey="name" />
                <Tooltip wrapperStyle={{
                    width: '15rem',
                    border: 'none',
                    outline: 'none',
                    fontSize: '1.3rem'
                }} />
                <Legend />
                <Line type="monotone" dataKey="newCustomers" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="crossSeling" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default EChart;