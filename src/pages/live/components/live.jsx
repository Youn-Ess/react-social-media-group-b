import React from 'react';
import image from "../../../assets/img/Under construction-amico.png"

export const LiveStreams = () => {
    return (
        <section className='absolute left-[27.4vw] top-[16vh]'>
            <div>
                <div className='w-[70vw] p-10 bg-[#FF395c] rounded-md'>
                    <h1 className='text-white text-3xl font-bold'>Live Streams</h1>
                    <h1 className='text-gray-300 text-sm font-bold'>20 Live Found</h1>
                </div>
                <div className='w-[70vw] flex justify-center items-center relative'>
                        <img src={image} alt="image" className='w-[45vw] ' />
                        <div className='w-[70vw] h-[80vh] bg-black opacity-80 rounded-md p-20 absolute top-4 flex flex-col justify-center items-center'>
                            <div className='w-[35vw] h-4 bg-[#FF395C] absolute left-0 top-[42%]'></div>
                            <h1 className='text-[#FF395C] font-bold text-[80px] absolute top-[30%] left-[35vw]'>Coming</h1>
                            <div className='w-[35vw] h-4 bg-[#FF395C] absolute right-0 top-[60%]'></div>
                            <h1 className='text-[#FF395C] font-bold text-[80px] absolute right-[35vw] top-[46%]'>Soon</h1>
                        </div>
                </div>
            </div>
        </section>
    );
};

