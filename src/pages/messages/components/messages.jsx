import React from 'react';
import image from '../../../assets/img/Under construction-amico.png'

export const Messages = () => {
    return (
        <>
            {/* <section className=''>
                <div className='bg-black w-[46.2vw] h-[80vh] absolute left-[27.4vw] top-[16vh]'>

                </div>
            </section> */}
            <section className='absolute left-[27.4vw] top-[16vh]'>
            <div>
                <div className='w-[46vw] p-10 bg-[#FF395c] rounded-md'>
                    <h1 className='text-white text-3xl font-bold'>Messages</h1>
                    <h1 className='text-gray-300 text-sm font-bold'>20 Messages</h1>
                </div>
                <div className='w-[46vw] flex justify-center items-center relative'>
                        <img src={image} alt="image" className='w-[45vw] ' />
                        <div className='w-[46vw] h-[80vh] bg-black opacity-80 rounded-md p-20 absolute top-4 flex flex-col justify-center items-center'>
                            <div className='w-[20vw] h-4 bg-[#FF395C] absolute left-0 top-[42%]'></div>
                            <h1 className='text-[#FF395C] font-bold text-[80px] absolute top-[30%] left-[20vw]'>Coming</h1>
                            <div className='w-[25vw] h-4 bg-[#FF395C] absolute right-0 top-[60%]'></div>
                            <h1 className='text-[#FF395C] font-bold text-[80px] absolute right-[25vw] top-[46%]'>Soon</h1>
                        </div>
                </div>
            </div>
        </section>
        </>
    );
};

