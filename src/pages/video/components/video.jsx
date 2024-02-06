import React, { useState } from 'react';
import image1 from "../../../assets/img/Screenshot.png"
import { FaSearch } from "react-icons/fa";
import { IoMdSend} from "react-icons/io";
import { MdAddBox } from "react-icons/md";





export const Video = () => {
    const arrayVideo = []
    const [file, setFile] = useState("")
    // function handleChange(e) {
    //     setFile(URL.createObjectURL(e.target.files[0]));
    //     console.log(file);
    // }
    console.log(arrayVideo);
    return (
        <section className='absolute left-[27.4vw] top-[18vh]'>
            <div className='w-[70vw] h-[20vh] bg-[#FF395C] rounded-md p-6 mb-4'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold text-4xl'>Video</h1>
                        <h1 className='text-gray-200 font-bold'>20 Video FOUND</h1>
                    </div>
                    <div className='flex items-center'>
                        <input type="text" className='p-2 rounded-md relative mr-1' placeholder='search...' />
                        <FaSearch className='absolute top-12 right-[7vw]'/>
                        <MdAddBox className='text-[50px]'/>
                    </div>
                </div>
            </div>
            {/* {
                arrayVideo.map((element, index)=>{
                    <div className='w-[72.3vw] h-[50vh] bg-black'> 
                        <video className='w-[20vw] h-[50vh]' src={element.file}></video>
                    </div>
                })
            } */}
            <div>
                <div className='flex pb-6 border-b-2 w-[70vw]'>
                    <div>
                        <div className='flex items-center p-2'>
                            <div className='w-9 h-9 bg-[#FF395C] rounded-full mr-2'></div>
                            <div>
                                <h1 className='font-bold'>Achraf Bensabir</h1>
                                <h1 className='text-xs font-bold'>3h Hour ago</h1>
                            </div>
                        </div>
                        <div className='flex'>
                            <img src={image1} alt="" className='w-[48.7vw] h-[64vh] border-2 border-[#FF395C] rounded-s-xl' />
                            <div className='w-[23vw] h-[64vh] rounded-e-xl bg-[#FF395C] relative'>
                                <h1 className='text-white text-xl font-bold py-4 px-4'>Comment</h1>
                                <div className='border-t-2 flex p-2'>
                                    <div className='w-8 h-8 bg-white rounded-full mr-1'></div>
                                    <div className='w-[19vw] h-[16vh] bg-white rounded-xl p-2'>
                                        <h1 className='text-black font-bold text-xs mb-1'>Achraf Ben sabir</h1>
                                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque mollitia excepturi dolorem deserunt ducimus perspiciatis, nemo harum in impedit!</p>
                                    </div>
                                </div>
                                <div className='absolute flex justify-between items-center w-[22vw] bottom-0 m-2'>
                                    <div className='w-9 h-9 bg-white rounded-full'></div>
                                    <input type="text" placeholder='comments...' className='p-2 rounded-full outline-0' />
                                    <button className='bg-white w-10 h-10 rounded-md flex justify-center items-center text-2xl'><IoMdSend /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

