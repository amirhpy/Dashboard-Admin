import React from 'react';

// Recharts
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Database
import { xAxisData } from '../../../Database/database';

const Chart = () => {
    return (
        <div className='recharts'>
            <ResponsiveContainer width="100%" height="100%" aspect={2}>
                <BarChart
                    width={500}
                    height={300}
                    data={xAxisData}
                    barSize={18}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <Tooltip wrapperStyle={{
                        width: '15rem',
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#1C2536',
                        borderRadius: '.8rem',
                        fontSize: '1.3rem'
                    }} />
                    <Legend />
                    <Bar dataKey="thisYear" fill="#6366F1" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;