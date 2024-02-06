import React, { useContext, useState } from 'react';
import { FaHouse, } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdHelp, IoIosContacts } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MyContext } from '../../../utils/contextProvider';

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";







export const Setting = () => {

    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)
    const [changeFirstName, setChangeFirstName] = useState(``)
    const [changeLastName, setChangeLastName] = useState(``)
    const [oldPassword, setOldPassword] = useState(``)
    const [changePassword, setChangePassword] = useState(``)
    const [changeConfirmPassword, setChangeConfirmPassword] = useState(``)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const connectedUser = connected[0]

    let connectedUserInDataBase = dataBase.find(element => element.userName == connectedUser.userName)

    const handlChangeFirstName = () => {
        if (changeFirstName) {
            connectedUser.firstName = changeFirstName
            connectedUserInDataBase.firstName = changeFirstName
            setChangeFirstName(``)
        } else {
            alert(`must enter your new first name`)
        }
    }
    const handlChangeLastName = () => {
        if (changeLastName) {
            connectedUser.lastName = changeLastName
            connectedUserInDataBase.lastName = changeLastName
            setChangeLastName(``)
        } else {
            alert(`must enter your new last name`)
        }
    }
    const handlChangePassword = () => {
        if (changePassword && changeConfirmPassword && oldPassword) {
            if (oldPassword == connectedUserInDataBase.password) {
                if (changePassword == changeConfirmPassword) {
                    connectedUserInDataBase.password = changePassword
                    connectedUser.password = changePassword
                    handleOpen()
                } else {
                    alert(`password not match`)
                }
            } else {
                alert(`old password uncorrect`)
            }
        } else {
            alert(`must fill all inputs`)
        }

    }

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
                        <div className='flex items-center justify-between rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2' >
                            <div className='flex items-center'>
                                <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} ><MdDriveFileRenameOutline /></h1>
                                <h1 to={"/"} className='font-bold' >Change first name</h1>
                            </div>
                            <div>
                                <input type="text" value={changeFirstName} onChange={(e) => { setChangeFirstName(e.target.value) }} />
                                <button onClick={handlChangeFirstName}>save</button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2' >
                            <div className='flex items-center'>
                                <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} ><MdDriveFileRenameOutline /></h1>
                                <h1 to={"/"} className='font-bold' >Change last name</h1>
                            </div>
                            <div>
                                <input type="text" value={changeLastName} onChange={(e) => { setChangeLastName(e.target.value) }} />
                                <button onClick={handlChangeLastName}>save</button>
                            </div>
                        </div>

                        <div className='flex items-center rounded-md bg-[#FF395C] hover:bg-red-600 transition-all mb-2' onClick={handleOpen}>
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><RiLockPasswordLine /></h1>
                            <h1 to={"/"} className='font-bold'>Change Password</h1>
                        </div>
                        <div className='modal2-last-name'>
                            <Dialog open={open} handler={handleOpen} className=''>
                                <DialogHeader className='text-center'>changing your last name</DialogHeader>
                                <DialogBody>
                                    <div className='flex flex-col items-center gap-3'>
                                        <p>welcome : {connectedUser.firstName} {connectedUser.lastName}</p>
                                        <label htmlFor="">enter old password</label>
                                        <input type="password" onChange={(e) => { setOldPassword(e.target.value) }} />
                                        <label htmlFor="">enter new password</label>
                                        <input type="password" onChange={(e) => { setChangePassword(e.target.value) }} />
                                        <label htmlFor="">confirm new password</label>
                                        <input type="password" onChange={(e) => { setChangeConfirmPassword(e.target.value) }} />
                                    </div>
                                </DialogBody>
                                <DialogFooter>
                                    <Button
                                        variant="text"
                                        color="red"
                                        onClick={handleOpen}
                                        className="mr-1"
                                    >
                                        <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="green" onClick={handlChangePassword}>
                                        <span>Confirm</span>
                                    </Button>
                                </DialogFooter>
                            </Dialog>
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
                            <h1 className='font-bold icon p-3 text-2xl rounded-full mr-2' to={"/"} onClick={() => "bg-[#FF395C]"}><IoLogOut /></h1>
                            <h1 to={"/"} className='font-bold'>Logout</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

