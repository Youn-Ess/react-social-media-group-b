import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHouse, FaVideo, FaShop } from "react-icons/fa6";
import { MdGroups, MdBookmarkAdded, MdEmojiEvents } from "react-icons/md";
import { RiMessage3Fill, RiLiveFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";





export const SideBare1 = () => {
    const navigat = useNavigate()
    const focus = () =>{

    }
    return (
        <div className='absolute left-0 mt-[4vw]'>
            <div className='fixed overflow-y-scroll max-h-[100%] scrollbar-thin scrollbar-thumb-[#FF395C] scrollbar-track-[#ECEFF1]'>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' border-b-2 border-[#FF395C]'>
                        <h1 className='pb-4 font-bold px-7 text-xl'>New Feeds</h1>
                    </div>
                    <div className='flex flex-col justify-around h-[50vh] px-7 py-2 '>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all' onClick={() => navigat("/home")}>
                            <Link className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/home"} onClick={() => "bg-[#FF395C]"}><FaHouse /></Link>
                            <Link to={"/home"} className='font-bold'>Home</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]'>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/Video"}><FaVideo /></Link>
                            <Link to={"/Video"} className='font-bold'>Video</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/market")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/market"}><FaShop /></Link>
                            <Link to={"/market"} className='font-bold'>Market</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/Saved")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/Saved"}><MdBookmarkAdded /></Link>
                            <Link to={"/Saved"} className='font-bold'>Saved</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/groups")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/groups"}><MdGroups /></Link>
                            <Link to={"/groups"} className='font-bold'>Groups</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' border-b-2 border-[#FF395C]'>
                        <h1 className='pb-4 font-bold px-7 text-xl'>More Pages</h1>
                    </div>
                    <div className='flex flex-col justify-around h-[35vh] px-7 py-2'>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/Messages")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/Messages"}><RiMessage3Fill /></Link>
                            <Link className='font-bold' to={"/Messages"}>Meassge</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/Events")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/Events"}><MdEmojiEvents /></Link>
                            <Link to={"/Events"} className='font-bold'>Latest Events</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/Live")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/Live"}><RiLiveFill /></Link>
                            <Link to={"/Live"} className='font-bold'>Live Streams</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' border-b-2 border-[#FF395C]'>
                        <h1 className='pb-4 font-bold px-7 text-xl'>Account</h1>
                    </div>
                    <div className='flex flex-col justify-around h-[35vh]  px-7 py-2'>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/profile")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/profile"}><CgProfile /></Link>
                            <Link to={"/profile"} className='font-bold'>Profile</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/Settings")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/Settings"}><IoMdSettings /></Link>
                            <Link to={"/Settings"} className='font-bold'>Settings</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-red-600 transition-all bg-[#FF395C]' onClick={() => navigat("/")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2' to={"/"}><IoLogOutSharp /></Link>
                            <Link to={"/"} className='font-bold'>Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
