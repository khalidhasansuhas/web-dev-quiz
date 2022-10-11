import React from 'react';

const QuizDetails = ({option}) => {
    return (
        <div>
            <button className='rounded flex m-auto bg-cyan-900 hover:bg-lime-600 text-white py-2 w-3/4 px-3 my-2'><p>{option}</p></button>
        </div>
    );
};

export default QuizDetails;