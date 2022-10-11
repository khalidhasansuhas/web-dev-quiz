import React, { useContext } from 'react';
import { TopicContext } from '../../layouts/Main';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const loaderData = useContext(TopicContext)
    const topics = loaderData.data
    console.log(topics);
    return (

        <div className='h-screen'>
        <h2 className='text-5xl font-semibold py-8  flex justify-center underline underline-offset-8'> Number of Quiz for each subject in Chart</h2>
            <div className='flex justify-center my-10'>

                <BarChart
                    width={1000}
                    height={300}
                    data={topics}>
                    <Bar dataKey="total" fill="#8884d8" />

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistic;