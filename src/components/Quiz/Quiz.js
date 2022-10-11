import React from 'react';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = ({correctAnswer, quiz}) => {
    const {question, options} = quiz;
    // console.log(quiz);
    return (
        <div className=' container my-5 bg-slate-300 w-1/2 border-solid rounded border-2 border-purple-800 m-auto p-10 '>
            <h2 className='text-2xl font-semibold m-auto'>Quiz : {question}</h2>
            {
                options.map((option,idx) => <QuizDetails key={idx} option={option}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;