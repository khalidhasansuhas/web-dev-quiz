import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const loaderData =  useLoaderData()
    const topics = loaderData.data
    console.log(topics);
    return (
        <div>
            <h2>This is home</h2>
            {
                topics.map(topic=> <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Home;