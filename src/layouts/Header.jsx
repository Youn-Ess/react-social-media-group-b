import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouse, FaVideo, FaShop, FaMessage } from "react-icons/fa6";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdGroups, MdDarkMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";









const Header = () => {
    return (
        <div className='flex justify-between items-center pt-4 px-4'>
            <Link className='font-bold text-2xl' to={"/"}>Logo</Link>
            <nav className='flex justify-between items-center w-[48vw] ml-[14vw]'>
                <input className='outline rounded-full w-[26vw] py-2 px-4' type="text" placeholder='Search...' />
                <div className='flex justify-around items-center w-[21vw]'>
                    <Link className='text-2xl p-3 rounded-full bg-blue-300  flex justify-center items-center' to={"/"}> <FaHouse /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <RiChatHistoryFill /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/Video"}> <FaVideo /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <MdGroups /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <FaShop /> </Link>
                </div>
            </nav>
            <div className='flex justify-around items-center w-[18vw]'>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <IoMdNotifications /> </Link>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <FaMessage /></Link>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"} ><MdDarkMode /></Link>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <CgProfile /></Link>
            </div>
        </div>
    );
};

export default Header;