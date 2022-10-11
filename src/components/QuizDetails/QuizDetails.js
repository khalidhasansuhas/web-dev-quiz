import React from 'react';
import Swal from 'sweetalert2';

const QuizDetails = ({option, correctAnswer}) => {
    // console.log(correctAnswer);

    const handleAnswer = (e)=>{
        if(correctAnswer === e){
            Swal.fire(
                'Good job!',
                'Your Answer is Correct!',
                'success'
              )
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Answer is wrong!',
              })
        }
    }
    return (
        <div>
            <button onClick={()=>{handleAnswer(option)}} className='rounded flex m-auto bg-cyan-900 hover:bg-lime-600 text-white py-2 w-3/4 px-3 my-2'><p>{option}</p></button>
        </div>
    );
};

export default QuizDetails;