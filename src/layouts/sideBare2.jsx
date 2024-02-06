import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";



export const SideBare2 = () => {
    const navigat = useNavigate
    return (
        <div className='absolute right-0 mt-[4vw]'>
            <div>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' flex justify-between border-b-2 border-black px-3'>
                        <h1 className='pb-4 font-bold'>Friends</h1>
                        <Link to={"/"} className='font-bold text-blue-600'>See all</Link>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <div className='relative'>
                                    <h1 className='bg-gray-400 p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                                    <div className='w-[1vw] h-[2vh] border-2 border-white bg-green-600 rounded-full absolute right-[14%] bottom-[0%] z-10'></div>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1 className='font-bold'>Achraf Bensabir</h1>
                                        <h1 className='font-semibold text-[13px]'>12 mutual friends</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <div className='relative'>
                                    <h1 className='bg-gray-400 p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                                    <div className='w-[1vw] h-[2vh] border-2 border-white bg-green-600 rounded-full absolute right-[14%] bottom-[0%] z-10'></div>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1 className='font-bold'>Achraf Bensabir</h1>
                                        <h1 className='font-semibold text-[13px]'>12 mutual friends</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <div className='relative'>
                                    <h1 className='bg-gray-400 p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                                    <div className='w-[1vw] h-[2vh] border-2 border-white bg-green-600 rounded-full absolute right-[14%] bottom-[0%] z-10'></div>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1 className='font-bold'>Achraf Bensabir</h1>
                                        <h1 className='font-semibold text-[13px]'>12 mutual friends</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <div className='relative'>
                                    <h1 className='bg-gray-400 p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                                    <div className='w-[1vw] h-[2vh] border-2 border-white bg-green-600 rounded-full absolute right-[14%] bottom-[0%] z-10'></div>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1 className='font-bold'>Achraf Bensabir</h1>
                                        <h1 className='font-semibold text-[13px]'>12 mutual friends</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <div className='relative'>
                                    <h1 className='bg-gray-400 p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                                    <div className='w-[1vw] h-[2vh] border-2 border-white bg-green-600 rounded-full absolute right-[14%] bottom-[0%] z-10'></div>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1 className='font-bold'>Achraf Bensabir</h1>
                                        <h1 className='font-semibold text-[13px]'>12 mutual friends</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' flex justify-between border-b-2 border-black px-3 w-[22vw]'>
                        <h1 className='pb-4 font-bold'>Suggestion</h1>
                        <Link to={"/"} className='font-bold text-blue-600'>See all</Link>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='bg-black rounded-md p-2 w-[20vw] flex items-center'>
                            <h1 className='bg-gray-400 w-fit p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className='font-bold text-white'>Achraf Bensabir</h1>
                                    <h1 className='font-semibold text-[13px] text-gray-200'>12 mutual friends</h1>
                                </div>
                                <IoIosAdd className='text-white font-bold text-2xl ml-9 border-2 border-white rounded-md' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='bg-black rounded-md p-2 w-[20vw] flex items-center'>
                            <h1 className='bg-gray-400 w-fit p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className='font-bold text-white'>Achraf Bensabir</h1>
                                    <h1 className='font-semibold text-[13px] text-gray-200'>12 mutual friends</h1>
                                </div>
                                <IoIosAdd className='text-white font-bold text-2xl ml-9 border-2 border-white rounded-md' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='bg-black rounded-md p-2 w-[20vw] flex items-center'>
                            <h1 className='bg-gray-400 w-fit p-2 rounded-xl text-3xl mr-3'><CgProfile /></h1>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h1 className='font-bold text-white'>Achraf Bensabir</h1>
                                    <h1 className='font-semibold text-[13px] text-gray-200'>12 mutual friends</h1>
                                </div>
                                <IoIosAdd className='text-white font-bold text-2xl ml-9 border-2 border-white rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' flex justify-between border-b-2 border-black px-3 w-[22vw]'>
                        <h1 className='pb-4 font-bold'>Events</h1>
                        <Link to={"/"} className='font-bold text-blue-600'>See all</Link>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center w-[20vw]'>
                            <div className='bg-black rounded-md p-2 w-[6vw] h-[10vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                                <h1>APR</h1>
                                <h1>20</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Metting With Clients</h1>
                                <h1 className='font-semibold text-[12px]'>Res Khawla IMM 11 N 411 ETG 4 Casablnaca</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center w-[20vw]'>
                            <div className='bg-black rounded-md p-2 w-[6vw] h-[10vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                                <h1>APR</h1>
                                <h1>20</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Metting With Clients</h1>
                                <h1 className='font-semibold text-[12px]'>Res Khawla IMM 11 N 411 ETG 4 Casablnaca</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around px-7 py-2'>
                        <div className='flex items-center w-[20vw]'>
                            <div className='bg-black rounded-md p-2 w-[6vw] h-[10vh] flex flex-col items-center justify-center mr-2 text-white font-bold'>
                                <h1>APR</h1>
                                <h1>20</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Metting With Clients</h1>
                                <h1 className='font-semibold text-[12px]'>Res Khawla IMM 11 N 411 ETG 4 Casablnaca</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
