import React from 'react';
import { FaHouse, } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdHelp, IoIosContacts} from "react-icons/io";
import { IoLogOut } from "react-icons/io5";








export const Setting = () => {
    return (
        <>
            <section className='absolute left-[27.4vw] top-[16vh]'>
                <div>
                    <div className='w-[70vw] p-10 bg-[#FF395c] rounded-md'>
                        <h1 className='text-white text-3xl font-bold'>Settings</h1>
                        <h1 className='text-gray-300 text-sm font-bold'>Add Your Product</h1>
                    </div>
                    <div>
                        <h1 className='font-bold pt-4'>General</h1>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><FaHouse /></h1>
                            <h1 to={"/"} className='font-bold'>Account Information</h1>
                        </div>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><FaMapMarkerAlt /></h1>
                            <h1 to={"/"} className='font-bold'>Saved Address</h1>
                        </div>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><TiSocialAtCircular /></h1>
                            <h1 to={"/"} className='font-bold'>Sociel Acount</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold pt-4'>Acount</h1>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><MdDriveFileRenameOutline /></h1>
                            <h1 to={"/"} className='font-bold'>Change Name</h1>
                        </div>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><RiLockPasswordLine /></h1>
                            <h1 to={"/"} className='font-bold'>Change Password</h1>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold pt-4'>Other</h1>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><IoMdHelp /></h1>
                            <h1 to={"/"} className='font-bold'>Help</h1>
                        </div>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><IoIosContacts /></h1>
                            <h1 to={"/"} className='font-bold'>Contact Us</h1>
                        </div>
                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2'>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><IoLogOut/></h1>
                            <h1 to={"/"} className='font-bold'>Logout</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

