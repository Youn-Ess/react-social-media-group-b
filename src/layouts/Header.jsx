import React from 'react';
import { Link } from 'react-router-dom';
import { FaHouse, FaVideo, FaShop, FaMessage } from "react-icons/fa6";
import { MdGroups, MdDarkMode, MdEmojiEvents } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";









const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 bg-white shadow-[rgba(0,0,10,0.2)_5px_5px_4px_0px] fixed w-full z-10'>
            <Link className='font-bold text-2xl ml-[6vw]' to={"/"}> <span className='text-[#8e9fbb] text-4xl'>S</span>o<span className='text-[#8e9fbb] font-bold'>C</span>ial<span className='text-[#8e9fbb] font-bold text-4xl'>S</span></Link>
            <nav className='flex justify-between items-center w-[48vw] ml-[14vw]'>
                <div className='flex justify-around items-center w-[21vw]'>
                    <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] transition-all bg-[#8e9fbb] hover:text-white   flex justify-center items-center' to={"/home"}> <FaHouse /> </Link>
                    <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] transition-all bg-[#8e9fbb] hover:text-white flex justify-center items-center' to={"/Video"}> <FaVideo /> </Link>
                    <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] transition-all bg-[#8e9fbb] hover:text-white flex justify-center items-center' to={"/groups"}> <MdGroups /> </Link>
                    <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] transition-all bg-[#8e9fbb] hover:text-white flex justify-center items-center' to={"/Events"}> <MdEmojiEvents /> </Link>
                    <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] transition-all bg-[#8e9fbb] hover:text-white flex justify-center items-center' to={"/market"}> <FaShop /> </Link>
                </div>
                <input className='border-2 border-[#475069] outline-[#475069] rounded-full w-[26vw] py-2 px-4 font-bold text-[#263238]' type="search" placeholder='Search...' />
            </nav>
            <div className='flex justify-around items-center w-[18vw]'>
                <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] hover:text-white transition-all bg-[#8e9fbb] flex justify-center items-center' to={"/"}> <IoMdNotifications /> </Link>
                <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] hover:text-white transition-all bg-[#8e9fbb] flex justify-center items-center' to={"/"}> <FaMessage /></Link>
                <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] hover:text-white transition-all bg-[#8e9fbb] flex justify-center items-center' to={"/"} ><MdDarkMode /></Link>
                <Link className='text-2xl p-3 rounded-full hover:bg-[#475069] hover:text-white transition-all bg-[#8e9fbb] flex justify-center items-center' to={"/profile"}> <CgProfile /></Link>
            </div>
        </div>
    );
};

export default Header;