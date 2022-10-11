import React from 'react';
import QuizDetails from '../QuizDetails/QuizDetails';
import { EyeIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';

const Quiz = ({  quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // console.log(correctAnswer);
    const handleIconAnswer = () =>{
        Swal.fire(`Correct Answer: ${correctAnswer}`)
    }
    return (
        <div className='container  my-5 bg-slate-300 w-1/2 border-solid rounded border-2 border-purple-800 m-auto p-10 '>
            <div className='w-full flex justify-end'>
                <EyeIcon onClick={handleIconAnswer} className="h-6 w-6 hover:text-green-500 hover:cursor-pointer left-0 " />
            </div>
            <div >
                <h2 className='text-2xl font-semibold m-auto'>Quiz : <span className='text-xl'>{question}</span> </h2>

                {
                    options.map((option, idx) => <QuizDetails 
                    key={idx}
                    option={option}
                    correctAnswer={correctAnswer}
                    ></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;