import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouse, FaVideo, FaShop, FaMessage } from "react-icons/fa6";
import { MdGroups, MdDarkMode, MdEmojiEvents } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";









const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 bg-white shadow-[rgba(0,0,10,0.2)_5px_5px_4px_0px] fixed w-full z-10'>
            <Link className='font-bold text-2xl' to={"/"}>Logo</Link>
            <nav className='flex justify-between items-center w-[48vw] ml-[14vw]'>
                <input className='border-2 border-[#FF395C] outline-none rounded-full w-[26vw] py-2 px-4 font-bold text-[#263238]' type="text" placeholder='Search...' />
                <div className='flex justify-around items-center w-[21vw]'>
                    <Link className='text-2xl p-3 rounded-full bg-[#FF395c]  flex justify-center items-center' to={"/home"}> <FaHouse /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/Video"}> <FaVideo /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/groups"}> <MdGroups /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/Events"}> <MdEmojiEvents /> </Link>
                    <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/market"}> <FaShop /> </Link>
                </div>
            </nav>
            <div className='flex justify-around items-center w-[18vw]'>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <IoMdNotifications /> </Link>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"}> <FaMessage /></Link>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/"} ><MdDarkMode /></Link>
                <Link className='text-2xl p-3 rounded-full bg-gray-300 flex justify-center items-center' to={"/profile"}> <CgProfile /></Link>
            </div>
        </div>
    );
};

export default Header;