import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHouse, FaVideo, FaShop } from "react-icons/fa6";
import { MdGroups, MdBookmarkAdded, MdEmojiEvents } from "react-icons/md";
import { RiMessage3Fill, RiLiveFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { MyContext } from '../utils/contextProvider';





export const SideBare1 = () => {
    const navigat = useNavigate()
    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)
    const logOut = () => {
        setConnected([])
        navigat(`/`)
    }
    const focus = () => {

    }
    return (
        <div className='absolute left-0 mt-[4vw]'>
            <div className='fixed overflow-y-scroll max-h-[100%] scrollbar-thin scrollbar-thumb-[#FF395C] scrollbar-track-[#ECEFF1]'>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' border-b-2 border-[#c3cee1]'>
                        <h1 className='pb-4 font-bold px-7 text-xl text-[#8e9fbb]'>New Feeds</h1>
                    </div>
                    <div className='flex flex-col justify-around h-[50vh] px-7 py-2 '>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/home")}>
                            <Link className='font-bold icon p-3 text-2xl rounded-full mr-2 text-white' to={"/home"} onClick={() => "bg-[#FF395C]"}><FaHouse /></Link>
                            <Link to={"/home"} className='font-bold text-white'>Home</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]'>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/Video"}><FaVideo /></Link>
                            <Link to={"/Video"} className='font-bold text-white'>Video</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/market")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/market"}><FaShop /></Link>
                            <Link to={"/market"} className='font-bold text-white'>Market</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/Saved")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/Saved"}><MdBookmarkAdded /></Link>
                            <Link to={"/Saved"} className='font-bold text-white'>Saved</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/groups")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/groups"}><MdGroups /></Link>
                            <Link to={"/groups"} className='font-bold text-white'>Groups</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' border-b-2 border-[#c3cee1]'>
                        <h1 className='pb-4 font-bold px-7 text-xl text-[#8e9fbb]'>More Pages</h1>
                    </div>
                    <div className='flex flex-col justify-around h-[35vh] px-7 py-2'>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/Messages")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/Messages"}><RiMessage3Fill /></Link>
                            <Link className='font-bold text-white' to={"/Messages"}>Meassge</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/Events")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/Events"}><MdEmojiEvents /></Link>
                            <Link to={"/Events"} className='font-bold text-white' >Latest Events</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/Live")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/Live"}><RiLiveFill /></Link>
                            <Link to={"/Live"} className='font-bold text-white' >Live Streams</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col shadow-md w-[22vw] rounded-md py-3 m-5 bg-white'>
                    <div className=' border-b-2 border-[#c3cee1]'>
                        <h1 className='pb-4 font-bold px-7 text-xl text-[#8e9fbb]' >Account</h1>
                    </div>
                    <div className='flex flex-col justify-around h-[35vh]  px-7 py-2'>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/profile")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/profile"}><CgProfile /></Link>
                            <Link to={"/profile"} className='font-bold text-white'>Profile</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={() => navigat("/Settings")}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/Settings"}><IoMdSettings /></Link>
                            <Link to={"/Settings"} className='font-bold text-white'>Settings</Link>
                        </div>
                        <div className='flex items-center rounded-md hover:bg-[#8e9fbb] transition-all bg-[#475069]' onClick={logOut}>
                            <Link className='font-bold icon  p-3 text-2xl rounded-full mr-2 text-white' to={"/"}><IoLogOutSharp /></Link>
                            <Link to={"/"} className='font-bold text-white'>Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
