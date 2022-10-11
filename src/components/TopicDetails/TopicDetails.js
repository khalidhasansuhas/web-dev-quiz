import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const TopicDetails = () => {
    const loadTopics = useLoaderData()
    const topic = loadTopics.data.questions;

    return (
        <div>
            <h2 className='text-5xl font-bold text-center underline underline-offset-8 py-10'>Quiz of {loadTopics.data.name}</h2>
            {
                topic.map(quiz => <Quiz
                key={quiz.id}
                // correctAnswer={quiz.correctAnswer}
                quiz={quiz}
                ></Quiz> )
            }
        </div>
    );
};

export default TopicDetails;