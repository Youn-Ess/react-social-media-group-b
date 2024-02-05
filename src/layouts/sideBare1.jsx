import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHouse, FaVideo, FaShop} from "react-icons/fa6";
import { MdGroups, MdBookmarkAdded, MdEmojiEvents  } from "react-icons/md";
import { RiMessage3Fill, RiLiveFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";




export const SideBare1 = () => {
    const navigat = useNavigate
    return (
        <div className='absolute'>
            <div className='flex flex-col outline w-[22vw] rounded-md py-3 m-5'>
                <div className=' border-b-2 border-black'>
                    <h1 className='pb-4 font-bold px-7 text-xl'>New Feeds</h1>
                </div>
                <div className='flex flex-col justify-around h-[50vh] px-7 py-2'>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-blue-400 p-3 text-2xl rounded-full mr-2' to={"/"}><FaHouse /></Link>
                        <h1 className='font-bold'>Home</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><FaVideo /></Link>
                        <h1 className='font-bold'>Videos</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><FaShop /></Link>
                        <h1 className='font-bold'>Market</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><MdBookmarkAdded/></Link>
                        <h1 className='font-bold'>Saved</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><MdGroups/></Link>
                        <h1 className='font-bold'>Groups</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col outline w-[22vw] rounded-md py-3 m-5'>
                <div className=' border-b-2 border-black'>
                    <h1 className='pb-4 font-bold px-7 text-xl'>More Pages</h1>
                </div>
                <div className='flex flex-col justify-around h-[35vh] px-7 py-2'>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><RiMessage3Fill /></Link>
                        <h1 className='font-bold'>Meassge</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><MdEmojiEvents  /></Link>
                        <h1 className='font-bold'>Latest Events</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><RiLiveFill /></Link>
                        <h1 className='font-bold'>Live Streams</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col outline w-[22vw] rounded-md py-3 m-5'>
                <div className=' border-b-2 border-black'>
                    <h1 className='pb-4 font-bold px-7 text-xl'>Account</h1>
                </div>
                <div className='flex flex-col justify-around h-[35vh]  px-7 py-2'>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><CgProfile /></Link>
                        <h1 className='font-bold'>Profile</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><IoMdSettings /></Link>
                        <h1 className='font-bold'>Settings</h1>
                    </div>
                    <div className='flex items-center'>
                        <Link className='font-bold bg-gray-400 p-3 text-2xl rounded-full mr-2' to={"/"}><IoLogOutSharp /></Link>
                        <h1 className='font-bold'>Log Out</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
