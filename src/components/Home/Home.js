import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { TopicContext } from '../../layouts/Main';
import Topic from '../Topic/Topic';

const Home = () => {
    const loaderData = useContext(TopicContext)
    const topics = loaderData.data
    return (
        <div>
            <div className="p-6 py-12 bg-violet-400 text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Practice Quiz !!!
                            
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span> Prepare yourself !!! for the </span>
                            <span className="font-bold text-lg">INTERVIEW</span>
                        </div>
                        <Link to='/blog' rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border text-white font-semibold block bg-orange-500 border-gray-400">Learn More</Link>
                    </div>
                </div>
            </div>
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