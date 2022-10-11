import React, { useContext } from 'react';
import { TopicContext } from '../../layouts/Main';

const Statistic = () => {
    const loaderData = useContext(TopicContext)
    const topics = loaderData.data
    // console.log(topics);
    return (

        <div>
           <h2> This is statistic</h2>
        </div>
    );
};

export default Statistic;