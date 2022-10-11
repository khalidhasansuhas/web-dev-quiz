import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TopicContext } from '../../layouts/Main';
import Topic from '../Topic/Topic';

const Home = () => {
    const loaderData = useContext(TopicContext)
    const topics = loaderData.data
    return (
        <div>
            <h2>This is home</h2>
            <section className='container grid lg:grid-cols-4 mx-auto'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </section>
        </div>
    );
};

export default Home;