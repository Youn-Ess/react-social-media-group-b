import React, { useState } from 'react';
import { FaEye, FaLocationDot, FaUnlockKeyhole } from 'react-icons/fa6';
import { MdGroups2 } from 'react-icons/md';

export const UserProfile = () => {


    const [file, setFile] = useState();
    const [file2, setFile2] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function handleChange2(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }



    return (
        <div className="profileBody w-[100%]  flex    absolute left-[24vw]">
            <div className="profileMain   w-[80vw] h-[100vh] flex pt-2 py-4">
            <div className="acountInfo sideBars  w-[22vw] h-[200vh]  flex flex-col gap-4 p-3">
                        
                        <div class="profile w-[100%] h-[140%] gap-3 flex flex-col  bg-slate-400  outline rounded-lg p-0 items-center relative justify-evenly ">
                            <div
                                class="relative coverPhoto w-[100%] h-[60%] text-center bg-black flex flex-col items-center rounded-lg ">
                                <h2>Add Image:</h2>
                                <input type="file" onChange={handleChange} />
                                <img src={file} />
                            </div>
                            <div
                                class=" profilepic w-[30%] h-[25%] text-center bg-blue-gray-900 rounded-lg  absolute">
                                <h2>Profile</h2>
                                <input type="file" onChange={handleChange2} className="z-0" />
                                <img src={file2} className="" />
                            </div>
                            <div class="p-6 mt-2 h-5 " >
                                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    User Name
                                </h5>
                                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">

                                </p>
                            </div>
                            <div className="accountFoloow w-[75%] h-10 flex justify-center gap-24  text-center items-center">
                                <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>posts</b> 000</div>
                                <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>followers</b> 000</div>
                                <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>follow</b> 000</div>
                            </div>
                            <div class="p-6 pt-0">
                                <button
                                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-blue-gray-900  shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="about w-[100%] h-[90%] profile bg-blue-gray-200  outline rounded-lg flex flex-col justify-between py-2">
                            <div className="aboutHeader w-[100%] flex justify-between border-b-2 p-2">
                                <h4 className='px-2'>About</h4>
                                <h4 className='px-2'>See All</h4>
                            </div>
                            <div className="userBio border-b-2">
                                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum saepe, sequi culpa itaque incidunt.</p>
                            </div>
                            <div className="aboutDescription">
                                <div className="aboutDescription1 flex items-center gap-2 pl-6 p-[6px]">
                                    <p className='text-[25px] '><FaUnlockKeyhole /></p>
                                    <div className="text p-[3px] ">
                                        <h6 className='text-[18px] font-bold '>Private</h6>
                                        <p className='text-[14px] '>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                                <div className="aboutDescription2 flex items-center gap-2 pl-6 p-[6px]">
                                    <p className='text-[25px] '><FaEye /></p>
                                    <div className="text p-[3px] ">
                                        <h6 className='text-[18px] font-bold '>Visible</h6>
                                        <p className='text-[14px] '>Lorem ipsum dolor sit.</p>
                                    </div>
                                </div>
                                <div className="aboutDescription3 flex items-center gap-2 pl-6 p-[6px]">
                                    <p className='text-[25px] '><FaLocationDot /></p>
                                    <div className="text p-[3px] ">
                                        <h6 className='text-[18px] font-bold '>CasaBlanca, Sidi Othmane</h6>
                                    </div>
                                </div>
                                <div className="aboutDescription4 flex items-center gap-2 pl-6 p-[6px]">
                                    <p className='text-[25px] '><MdGroups2 /></p>
                                    <div className="text p-[3px] ">
                                        <h6 className='text-[18px] font-bold '>General Group</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="photos w-[100%] h-[100%] flex flex-col profile bg-blue-gray-200  outline rounded-lg items-center justify-around py-2">
                            <div className="photosHeader w-[100%] flex justify-between border-b-2">
                                <h4 className='p-3'>PHotos</h4>
                                <h4 className='p-3'>See All</h4>
                            </div>
                            <div className="photosDisplay h-[80%] w-[98%] flex flex-wrap justify-around px-3  gap-1 items-center ">
                                <p className='w-[45%] h-[25%] bg-slate-900 text-center'>lorem1</p>
                                <p className='w-[45%] h-[25%] bg-slate-900 text-center'>lorem1</p>
                                <p className='w-[45%] h-[25%] bg-slate-900 text-center'>lorem1</p>
                                <p className='w-[45%] h-[25%] bg-slate-900 text-center'>lorem1</p>
                                <p className='w-[45%] h-[25%] bg-slate-900 text-center'>lorem1</p>
                                <p className='w-[45%] h-[25%] bg-slate-900 text-center'>lorem1</p>
                            </div>
                            <div className="moreBtn w-[90%] h-[10%] bg-slate-900 mt-2 text-center rounded-full">More</div>
                        </div>
                        <div className="events w-[100%] h-[70%] profile bg-blue-gray-200  outline rounded-lg flex flex-col justify-around">
                            <div className="eventsHeader w-[100%] flex justify-between ">
                                <h4 className='p-3'>Events</h4>
                                <h4 className='p-3'>See All</h4>
                            </div>
                            <div className="meetingDiv w-[100%] h-[80%] flex flex-col justify-around ">
                                <div className="metting flex ">
                                    <p className='w-[25%] h-[80%] rounded-lg  flex flex-col justify-center items-center bg-black text-red-50 m-2 p-2'><b>APR</b><b>20</b></p>
                                    <div className=" ">
                                        <p><b>Lorem, ipsum dolor.</b></p><p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                                <div className="metting flex ">
                                    <p className='w-[25%] h-[80%] rounded-lg  flex flex-col justify-center items-center bg-black text-red-50 m-2 p-2'><b>APR</b><b>20</b></p>
                                    <div className=" ">
                                        <p><b>Lorem, ipsum dolor.</b></p><p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                                <div className="metting flex ">
                                    <p className='w-[25%] h-[80%] rounded-lg  flex flex-col justify-center items-center bg-black text-red-50 m-2 p-2'><b>APR</b><b>20</b></p>
                                    <div className=" ">
                                        <p><b>Lorem, ipsum dolor.</b></p><p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};
