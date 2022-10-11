import React from 'react';

const Topic = ({topic}) => {
    const {name, logo , total} = topic;
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid  lg:grid-cols-1">
                <div className="transition duration-300 transform bg-blue rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <img
                            className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                            src={logo} 
                            alt=''
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                    </div>
                    <div className="px-6 py-8 border bg-slate-200 border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            {name}
                        </h5>
                        <p className="mb-5 text-gray-700">
                           Total Quiz: {total}
                        </p>
                         <button className='rounded w-full py-3 font-semibold text-white bg-orange-500'>Start Quiz</button>   
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Topic;