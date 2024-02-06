import React from 'react';
import image from "../../../assets/img/Free Vector _ Music event poster template.jpeg"

export const Saved = () => {
    return (
        <>
        <section className='absolute left-[27.4vw] top-[16vh]'>
            <div>
                <div className='w-[70vw] p-10 bg-[#FF395c] rounded-md mb-4'>
                    <h1 className='text-white text-3xl font-bold'>Saved</h1>
                    <h1 className='text-gray-300 text-sm font-bold'>20 Save Found</h1>
                </div>
                <div className='flex flex-wrap w-[70vw] justify-center items-center gap-4'>
                    <div className='w-[22vw] h-[49vh] outline rounded-md'>
                        <img src={image} alt="" />
                        <div className='flex justify-between items-center px-2'>
                            <h1 className='font-bold'>Save1</h1>
                            <h1 className='text-xs font-bold'>12/02/2024</h1>
                        </div>
                    </div>
                    <div className='w-[22vw] h-[49vh] outline rounded-md'>
                        <img src={image} alt="" />
                        <div className='flex justify-between items-center px-2'>
                            <h1 className='font-bold'>Save1</h1>
                            <h1 className='text-xs font-bold'>12/02/2024</h1>
                        </div>
                    </div>
                    <div className='w-[22vw] h-[49vh] outline rounded-md'>
                        <img src={image} alt="" />
                        <div className='flex justify-between items-center px-2'>
                            <h1 className='font-bold'>Save1</h1>
                            <h1 className='text-xs font-bold'>12/02/2024</h1>
                        </div>
                    </div>
                    <div className='w-[22vw] h-[49vh] outline rounded-md'>
                        <img src={image} alt="" />
                        <div className='flex justify-between items-center px-2'>
                            <h1 className='font-bold'>Save1</h1>
                            <h1 className='text-xs font-bold'>12/02/2024</h1>
                        </div>
                    </div>
                    <div className='w-[22vw] h-[49vh] outline rounded-md'>
                        <img src={image} alt="" />
                        <div className='flex justify-between items-center px-2'>
                            <h1 className='font-bold'>Save1</h1>
                            <h1 className='text-xs font-bold'>12/02/2024</h1>
                        </div>
                    </div>
                    <div className='w-[22vw] h-[49vh] outline rounded-md'>
                        <img src={image} alt="" />
                        <div className='flex justify-between items-center px-2'>
                            <h1 className='font-bold'>Save1</h1>
                            <h1 className='text-xs font-bold'>12/02/2024</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

