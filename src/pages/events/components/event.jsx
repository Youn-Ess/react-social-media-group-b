import React from 'react';
import image from "../../../assets/img/Free Vector _ Music event poster template.jpeg"
import { FaMapMarkerAlt } from "react-icons/fa";

export const Event = () => {
    return (
        <>
            <section className='absolute w-[70vw] top-[16vh] left-[27.4vw] flex flex-wrap gap-6'>
                <iframe className='rounded-xl w-[70vw] h-[54vh] shadow-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.058438495084!2d-7.5364266251407415!3d33.60378817332916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sfr!2sma!4v1707165354150!5m2!1sfr!2sma" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='flex flex-col justify-center items-center w-[22vw] shadow-md p-4 rounded-md'>
                    <img className='rounded-md mb-4' src={image} alt="" />
                    <div className='flex items-center justify-center mb-4'>
                        <div className='bg-black rounded-md p-2 w-[5.5vw] h-[12vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                            <h1 className=''>APR</h1>
                            <h1>20</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Live Music Festival</h1>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt/>
                                <h1> Casablanca</h1>
                            </div>
                        </div>
                    </div>
                        <button className='bg-[#FF395C] w-[10vw] h-10 rounded-md'>APPLY</button>
                </div>
                <div className='flex flex-col justify-center items-center w-[22vw] shadow-md p-4 rounded-md'>
                    <img className='rounded-md mb-4' src={image} alt="" />
                    <div className='flex items-center justify-center mb-4'>
                        <div className='bg-black rounded-md p-2 w-[5.5vw] h-[12vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                            <h1 className=''>APR</h1>
                            <h1>20</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Live Music Festival</h1>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt/>
                                <h1> Casablanca</h1>
                            </div>
                        </div>
                    </div>
                        <button className='bg-[#FF395C] w-[10vw] h-10 rounded-md'>APPLY</button>
                </div>
                <div className='flex flex-col justify-center items-center w-[22vw] shadow-md p-4 rounded-md'>
                    <img className='rounded-md mb-4' src={image} alt="" />
                    <div className='flex items-center justify-center mb-4'>
                        <div className='bg-black rounded-md p-2 w-[5.5vw] h-[12vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                            <h1 className=''>APR</h1>
                            <h1>20</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Live Music Festival</h1>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt/>
                                <h1> Casablanca</h1>
                            </div>
                        </div>
                    </div>
                        <button className='bg-[#FF395C] w-[10vw] h-10 rounded-md'>APPLY</button>
                </div>
                <div className='flex flex-col justify-center items-center w-[22vw] shadow-md p-4 rounded-md'>
                    <img className='rounded-md mb-4' src={image} alt="" />
                    <div className='flex items-center justify-center mb-4'>
                        <div className='bg-black rounded-md p-2 w-[5.5vw] h-[12vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                            <h1 className=''>APR</h1>
                            <h1>20</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Live Music Festival</h1>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt/>
                                <h1> Casablanca</h1>
                            </div>
                        </div>
                    </div>
                        <button className='bg-[#FF395C] w-[10vw] h-10 rounded-md'>APPLY</button>
                </div>
                <div className='flex flex-col justify-center items-center w-[22vw] shadow-md p-4 rounded-md'>
                    <img className='rounded-md mb-4' src={image} alt="" />
                    <div className='flex items-center justify-center mb-4'>
                        <div className='bg-black rounded-md p-2 w-[5.5vw] h-[12vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                            <h1 className=''>APR</h1>
                            <h1>20</h1>
                        </div>
                        <div>
                            <h1 className='font-bold text-lg'>Live Music Festival</h1>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt/>
                                <h1> Casablanca</h1>
                            </div>
                        </div>
                    </div>
                        <button className='bg-[#FF395C] w-[10vw] h-10 rounded-md'>APPLY</button>
                </div>

            </section>
        </>
    );
};

