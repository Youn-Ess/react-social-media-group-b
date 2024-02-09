import { Dialog, DialogBody, DialogFooter, DialogHeader, input } from '@material-tailwind/react';
import { Button, Carousel, Modal, Textarea } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaCheck, FaEye, FaLocationDot, FaPen, FaShare, FaUnlockKeyhole } from 'react-icons/fa6';
import { CiEdit } from "react-icons/ci";
import { MdGroups2 } from 'react-icons/md';
import { MyContext } from '../../../utils/contextProvider';
import defaultProfileImage from "../../../assets/img/profile.png"



import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { HiDotsCircleHorizontal } from 'react-icons/hi';
import Heart from 'react-heart';
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";
import { set } from 'lodash';







export const UserProfile = () => {


    const [bioInpt, setbioInpt] = useState()
    let editBio = false



    function ClockIcon() {
        return (
            <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99998 14.9C9.69736 14.9 11.3252 14.2257 12.5255 13.0255C13.7257 11.8252 14.4 10.1974 14.4 8.49998C14.4 6.80259 13.7257 5.17472 12.5255 3.97449C11.3252 2.77426 9.69736 2.09998 7.99998 2.09998C6.30259 2.09998 4.67472 2.77426 3.47449 3.97449C2.27426 5.17472 1.59998 6.80259 1.59998 8.49998C1.59998 10.1974 2.27426 11.8252 3.47449 13.0255C4.67472 14.2257 6.30259 14.9 7.99998 14.9ZM8.79998 5.29998C8.79998 5.0878 8.71569 4.88432 8.56566 4.73429C8.41563 4.58426 8.21215 4.49998 7.99998 4.49998C7.7878 4.49998 7.58432 4.58426 7.43429 4.73429C7.28426 4.88432 7.19998 5.0878 7.19998 5.29998V8.49998C7.20002 8.71213 7.28434 8.91558 7.43438 9.06558L9.69678 11.3288C9.7711 11.4031 9.85934 11.4621 9.95646 11.5023C10.0536 11.5425 10.1577 11.5632 10.2628 11.5632C10.3679 11.5632 10.472 11.5425 10.5691 11.5023C10.6662 11.4621 10.7544 11.4031 10.8288 11.3288C10.9031 11.2544 10.9621 11.1662 11.0023 11.0691C11.0425 10.972 11.0632 10.8679 11.0632 10.7628C11.0632 10.6577 11.0425 10.5536 11.0023 10.4565C10.9621 10.3593 10.9031 10.2711 10.8288 10.1968L8.79998 8.16878V5.29998Z"
                    fill="#90A4AE"
                />
            </svg>
        );
    }

    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)

    const navigate = useNavigate()


    const [file, setFile] = useState(null);
    const [file2, setFile2] = useState();



    const handleChange = (e) => {
        let addimg = true
        if (addimg) {
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            alert("cajeb")
        }
        e.target.value = "";

    }
    // const handleChange2 = (e) => {
    //     let addimg = true
    //     if (addimg) {
    //         setFile2(URL.createObjectURL(e.target.files[0]));

    //     } else {
    //         alert("cajeb")
    //     }
    //     e.target.value = "";
    // }


    console.log(connected);



    const aboutUser = () => {
        alert()
    }



    // & posts modal oppener
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        setDeletePictureSection(true)
    };

    const handleOpen2 = () => {
        setOpen(!open)
        setDeletePictureSection(false);
    };

    // & post description
    const [postDescription, setPostDescription] = useState();
    const descriptionHandler = (e) => {
        setPostDescription(e.target.value)
    }

    // & post image
    const [files, setFiles] = useState([]);
    const [postPictute, setPostPicture] = useState()

    // & if the user uploded more than 5
    const [uploadError, setUploadError] = useState(false);

    // Handle file input change event
    const handleFileInputChange = (e) => {
        const selectedFiles = [...e.target.files];
        setPostPicture(selectedFiles)
        if (files.length + selectedFiles.length <= 5) {
            setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
            setUploadError(false)
        } else {
            setUploadError(true)
            setTimeout(() => {
                setUploadError(false)
            }, 4000);
        }
    };

    const handleDelete = (index) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
        setUploadError(false)
    };
    // Render uploaded files
    const renderFiles = () => {
        return files.map((file, index) => (
            <div className='post-img pt-3 flex flex-col w-fit' key={index}>
                <img className='relative w-[100px] h-[120px]' src={URL.createObjectURL(file)} alt={file.name} />
                <button className='pic-delete absolute left-aut' onClick={() => handleDelete(index)}>X</button> {/* Add this line */}
                {/* <span className='' >{file.name}</span> */}
            </div>
        ));
    };

    // & hide the post picture section 
    const [deletePictureSection, setDeletePictureSection] = useState(true)

    const hidePostSection = () => {
        setDeletePictureSection(false)
    }



    // console.log(postPictute);
    // & create post 


    // useEffect(() => {
    //     const tab = [];
    //     dataBase.forEach(element => tab.push(element.myProducts));
    //     setStoriesDataBase(tab);
    // }, []);



    console.log(connected);
    console.log(allPostsDataBase);
    console.log(connected[0]);

    const createPost = () => {
        let post = {
            user: connected[0].userName,
            userPicture: connected[0].profileImage,
            description: postDescription,
            image: postPictute,
            date: "3 hours ago",
            likes: {
                likesNum: 0,
                users: [],
                active: false,
            },
            comments: {
                users: [],
                comments: [],
            }
        }

        allPostsDataBase.unshift(post)
        // setConnected(connected[0].myPosts.unshift(post))
        connected[0].myPosts.unshift(post)
        // setConnected(connected.myPosts.unshift(post))

        setOpen(!open);

        setFiles([])
        setPostDescription("")
        setPostPicture("")
    }

    // todo stories carousel


    const handleLikes = (postDescription, username) => {
        // Find the index of the post
        const postIndex = allPostsDataBase.findIndex(post => post.description === postDescription);
        if (postIndex !== -1) {
            // Get a copy of all posts
            const updatedPosts = [...allPostsDataBase];
            // Get the specific post
            const post = updatedPosts[postIndex];

            // Update the likes info for this post
            if (!post.likes.users.includes(username)) {
                // If user hasn't liked the post, increment likes count and add user to users array
                post.likes.likesNum++;
                post.likes.users.push(username);
                // Set active to true for this post
                post.likes.active = true;
            } else {
                // If user has already liked the post, decrement likes count and remove user from users array
                post.likes.likesNum--;
                post.likes.users = post.likes.users.filter(user => user !== username);
                // Set active to false for this post
                post.likes.active = false;
            }
            // Update the specific post in the allPostsDataBase state
            updatedPosts[postIndex] = post;
            // Update the state of allPostsDataBase
            setAllPostsDataBase(updatedPosts);
        }
    };




    const [openModal, setOpenModal] = useState(false);

    const [theComment, setTheComment] = useState(``);

    const addComment = () => {

    };



    const [bioBoolean, setBioBoolean] = useState(false)


    const [bio, setBio] = useState("")
    const [newbio, setNewBio] = useState("")

    const createBio = () => {
        setNewBio(bio)
        setBioBoolean(false)
    }

    const [actuellePI, setActuellePI] = useState(connected[0].profileImage)
    const [actualCP, setActualCP] = useState(connected[0].coverProfileImage)



    const coverChange = (e) => {
        setActualCP("")
        setActualCP(e.target.files[0])
    }


    const piChanger = (e) => {
        setActuellePI("")
        setActuellePI(e.target.files[0])
    }

    return (

        <div className="profileBody flex w-[70vw] h-[200vh] mt-[5%] flex-col gap-4 absolute left-[27vw]">
            <div class="profile w-[100%] h-[60%]  flex flex-col  bg-slate-400 overflow-hidden z-10  outline rounded-lg p-0  relative  justify-between text-gray-800">
                <input type="file" onChange={coverChange}
                    class=" coverPhoto w-[10%] h-[5%] right-0  bottom-[13.5rem] overflow-hidden z-20 opacity-0 bg-blue-gray-600  border-[0px]   flex flex-col  rounded-lg absolute" />
                <CiEdit className=' text-3xl mb-1  bottom-[13.5rem] right-0  bg-blue-gray-500 z-10 bg-opacity-30 rounded-tl-lg absolute ' />
                {

                }
                <img src={URL.createObjectURL(actualCP)} className=' w-[100%] h-[60%] border-0 bg-blue-gray-900 rounded-lg overflow-hidden' />

                <input type="file" onChange={(e) => { piChanger(e) }}
                    class=" profilepic w-[2%] h-[5%]  overflow-hidden opacity-0 bottom-[10rem] left-[9.5rem] rounded-full  bg-red-400   z-20  absolute " />
                <CiEdit className=' text-3xl mb-1 w-[7%] h-[5%]  bottom-[10rem] left-[8rem] text-white  z-10     rounded-tl-lg rounded-br-full absolute  cursor-pointer' />

                <img src={URL.createObjectURL(actuellePI)} className="w-[12%] h-[25%]   bg-blue-gray-900 overflow-hidden  rounded-full absolute left-[5vw] bottom-[10rem] " variant="gradient" />

                <div class=" h-5 flex " >

                    <h5 onClick={() => { navigate("/profile") }} class="block mb-2 font-sans text-xl antialiased font-semibold ml-[5rem] hover:cursor-pointer select-none leading-snug tracking-normal text-blue-gray-900">
                        {connected[0].userName}
                    </h5>


                    <div className="accountFoloow w-[75%] h-10 flex justify-center gap-24  text-center items-center">
                        <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>posts</b> {connected[0].myPosts.length}</div>
                        <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>followers</b> {connected[0].followers}</div>
                        <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>follow</b> {connected[0].following}</div>
                    </div>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">

                    </p>

                </div>

                <div class="p-6 pt-0 flex items-center">
                    <Menu >
                        <MenuHandler>
                            <IconButton variant="text">


                                <button
                                    class="align-middle select-none font-sans w-[100%] font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-blue-gray-900  shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    <p className="w-[100%]">More</p>
                                    <path
                                        fillRule="evenodd"
                                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                        clipRule="evenodd"
                                    />
                                </button>


                            </IconButton>
                        </MenuHandler>
                        <MenuList className="flex flex-col gap-2">
                            <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">

                                <div className="flex flex-col gap-1">
                                    <Typography variant="small" color="gray" className="font-semibold flex">
                                        <Avatar
                                            variant="circular"
                                            alt="natali craig"
                                            src={URL.createObjectURL(connected[0].profileImage)}
                                        />
                                        <div>
                                            <h1>Account creation</h1>
                                            <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                                                <ClockIcon />
                                                Account created on : 01/01/2015
                                            </Typography>
                                        </div>
                                    </Typography>
                                </div>
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </div>
            </div>
            <div className="profileMain  gap-3 w-[100%] h-[100%] flex flex-col py-4 ">
                <div className="about w-[35%] h-[90%] profile   outline rounded-lg flex flex-col justify-between py-2">
                    <div className="aboutHeader w-[100%] flex justify-between border-b-2 p-2">
                        <h4 className='px-2'>About</h4>
                        <button className='rounded-full p-1 hover:bg-gray-300' onClick={() => { setBioBoolean(true) }}>Edit bio ?</button>

                        <h4 className='px-2'>See All</h4>
                    </div>
                    <div className=' flex flex-col w-[100%]  p-3' >
                    {
                        bioBoolean && (
                            <div className=' w-[100%] flex justify-between px-2 py-2'>
                                <input className='rounded focus:bg-gray-300' onChange={(e) => { setBio(e.target.value) }} type="text" />
                                <button onClick={() => { createBio() }}>confirm</button>
                            </div>
                        )
                    }
                    <p className='w-[100%] p-4'>{newbio}</p>
                    </div>

                    <div className="aboutDescription">
                        <div className="aboutDescription1 flex items-center gap-2 pl-6 p-[6px]">
                            <p className='text-[25px] '><FaUnlockKeyhole /></p>
                            <div className="text p-[3px] ">
                                <h6 className='text-[18px] font-bold cursor-pointer'>Private</h6>
                                <p className='text-[14px] '>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="aboutDescription2 flex items-center gap-2 pl-6 p-[6px]">
                            <p className='text-[25px] '><FaEye /></p>
                            <div className="text p-[3px] ">
                                <h6 className='text-[18px] font-bold cursor-pointer  ' onClick={()=>{navigate("/home")}}>Visible</h6>
                                <p className='text-[14px] '>See Posts , photos and updates</p>
                            </div>
                        </div>
                        <div className="aboutDescription3 flex items-center gap-2 pl-6 p-[6px]"onClick={() => navigate("/Events")}>
                            <p className='text-[25px] '><FaLocationDot /></p>
                            <div className="text p-[3px] ">
                                <h6 className='text-[18px] font-bold cursor-pointer ' >CasaBlanca, AinSbaa</h6>
                            </div>
                        </div>
                        <div className="aboutDescription4 flex items-center gap-2 pl-6 p-[6px]" onClick={()=>{navigate("/groups")}}>
                            <p className='text-[25px] '><MdGroups2 /></p>
                            <div className="text p-[3px] ">
                                <h6 className='text-[18px] font-bold '  >General Group</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photos w-[35%] h-[100%] flex flex-col profile   outline rounded-lg items-center justify-around py-2">
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
                <div className="events w-[35%] h-[70%] profile   outline rounded-lg flex flex-col justify-around">
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
                <div className='absolute top-[32rem] left-[25rem] w-[63%]   z-10'>
                    <div className='flex items-start w-[100%] justify-center  '>
                        <div className="w-[100%] flex-col flex items-start justify-center pt-4 border rounded-xl mt-16 shadow-lg p-10">
                            <div className="pb-5 flex items-center gap-2">
                                <div className="w-12 h-12 border rounded-full" style={{ backgroundImage: `url(${connected[0].profileImage ? URL.createObjectURL(connected[0].profileImage) : defaultProfileImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                <p className='font-bold'>Create Post</p>
                            </div>
                            <div onClick={handleOpen} className="flex items-center border border-gray-900 rounded-lg pb-11 pt-5 h-11 w-[100%] text-black text-opacity-40 cursor-pointer"><p className='ml-3'>what's new {connected[0].userName}...</p></div>
                            <div className="flex w-[100%] justify-start pt-10 gap-12">
                                <button onClick={handleOpen} className='w-[15%] flex items-center gap-3 text-s font-light text-black text-opacity-70'><div className="w-9 h-9 border rounded-full"></div> Photo</button>
                                <button onClick={(e) => { handleOpen2(e) }} className='w-[26%] flex items-center gap-3 text-s font-light text-black text-opacity-70'><div className="w-9 h-9 border rounded-full"></div> Write something</button>
                            </div>
                        </div>
                    </div>
                    <Dialog className='flex flex-col w-[63%]'
                        open={open}
                        handler={handleOpen}
                    >
                        <DialogHeader className='flex justify-center relative'>
                            <div className="">
                                <h2>Create a new post</h2>
                            </div>
                            <div className="absolute right-0">
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span className='text-xl opacity-75'>X</span>
                                </Button>
                            </div>
                        </DialogHeader>
                        <DialogBody>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4">
                                    <div className="h-[40px] w-[40px] border border-black border-opacity-25 rounded-full" style={{ backgroundImage: `url(${connected[0].profileImage ? URL.createObjectURL(connected[0].profileImage) : ""})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                    <h1 className='font-bold text-black text-lg'>{connected[0].userName}</h1>
                                </div>
                                <textarea onChange={(e) => { descriptionHandler(e) }} className='h-20 border-none' name="" id="" cols="30" rows="10" placeholder="what's on your mind..." />
                                <div className="App p-3 pt-2 relative">
                                    <button onClick={hidePostSection} className={` absolute right-7 text-2xl z-10 ${deletePictureSection ? `` : `opacity-0 pointer-events-none`}`}>x</button>
                                    {deletePictureSection ?
                                        <>
                                            <div className="drop-area h-52 flex flex-col items-center justify-center ">
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    className="file-input"
                                                    onChange={handleFileInputChange}
                                                    multiple
                                                />
                                                <label className='flex items-center justify-center flex-col font-bold text-blue-gray-900' htmlFor="fileInput">
                                                    <span className='text-9xl text-gray-300 opacity-55'><FaCloudArrowDown /></span>                                                        Add your pics/videos <span className='text-xs font-light'>or drag and drop them</span>
                                                </label>
                                            </div>
                                            <div className="files-container flex w-fit gap-3 flex-wrap">
                                                {renderFiles()}
                                            </div>
                                        </>
                                        : null}

                                    {uploadError && <p className="upload-error text-red-500 ">You can upload a maximum of 5 pictures !</p>}
                                </div>
                            </div>
                        </DialogBody>
                        <DialogFooter className='flex items-center justify-center'>
                            {/* // && to post */}
                            <Button onClick={createPost} className='w-60' variant="gradient" color="blue" >
                                <span>Confirm</span>
                            </Button>
                            {/* // && to post */}
                        </DialogFooter>
                    </Dialog>
                    {/* <Button></Button> */}
                    {
                        connected[0].myPosts.map((element, index) => (
                            <div className="flex justify-center items-center w-[100%] pt-3 pb-8" key={index}>
                                <div className=" bg-gray-100 w-[40vw] h-fit min-h-[25vh] rounded-lg shadow-md p-4">
                                    <div className="post-header flex gap-3 items-center justify-between bg-gray-100 ms-1 rounded-t-lg p-2">
                                        <div className="flex gap-3 items-center">
                                            <div className="border-2 border-black rounded-full w-10 h-10 flex items-center justify-center" style={{ backgroundImage: `url(${element.userPicture ? URL.createObjectURL(element.userPicture) : ""})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                            <div className="">
                                                <h3 className=''>{element.user}</h3>
                                                <p className='opacity-50'>{element.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-5xl">
                                            <HiDotsCircleHorizontal />
                                        </div>
                                    </div>
                                    <div className="post-body flex flex-col gap-3">
                                        <p className='p-3'>
                                            {element.description}
                                        </p>
                                        {element.image && (
                                            element.image.length <= 1 ? (
                                                // If there's only one image, render it standalone
                                                <div className="h-[40vh] flex">
                                                    <div className="post-bg-img1 h-[100%] flex justify-center w-[100%] " style={{ backgroundImage: `url(${URL.createObjectURL(element.image[0])})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                                                    </div>
                                                </div>
                                            ) : (
                                                // If there are multiple images, render them in a carousel
                                                <Carousel
                                                    className="rounded-xl pt-5"
                                                    prevArrow={({ handlePrev }) => (
                                                        <IconButton
                                                            variant="text"
                                                            color="white"
                                                            size="lg"
                                                            onClick={handlePrev}
                                                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                                                />
                                                            </svg>
                                                        </IconButton>
                                                    )}
                                                    nextArrow={({ handleNext }) => (
                                                        <IconButton
                                                            variant="text"
                                                            color="white"
                                                            size="lg"
                                                            onClick={handleNext}
                                                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                                />
                                                            </svg>
                                                        </IconButton>
                                                    )}
                                                >
                                                    {/* Map over each image to render in the carousel */}
                                                    {element.image.map((image, index) => (
                                                        <div className="">
                                                            <div className="post-bg-img1 h-[40vh] w-[100%] flex justify-center " style={{ backgroundImage: `url(${URL.createObjectURL(image)})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>
                                                            </div>
                                                        </div>
                                                        // <img className='w-[250px]' key={index} src={URL.createObjectURL(image)} alt="" />
                                                    ))}
                                                </Carousel>
                                            )
                                        )}
                                    </div>
                                    <div className="post-footer flex items-end h-20 p-3 gap-5">
                                        <div className="">
                                            <div onClick={() => handleLikes(element.description, connected[0].userName)} className={`h-fit w-fit flex justify-start items-center px-2 py-1 bg-red-500 bg-opacity-25 cursor-pointer border rounded-md`}>
                                                <div style={{ width: "1rem" }}>
                                                    {/* Use element.likes.active to determine the active state */}
                                                    <Heart isActive={element.likes.active} onClick={() => handleLikes(element.description, connected[0].userName)} animationScale={1.2} animationTrigger="both" animationDuration={.2} className={`customHeart${element.likes.active ? " active" : ""}`} />
                                                </div>
                                                <span className={`ps-2 text-black text-sm`}>{element.likes.likesNum} Like</span>
                                            </div>
                                        </div>

                                        {/* comments */}
                                        <div className="">
                                            <div onClick={() => setOpenModal(true)} className={`h-fit w-fit flex justify-start items-center  p-1 pe-2 bg-gray-500 bg-opacity-20 cursor-pointer border rounded-md`}>
                                                <span className={` text-black text-sm flex items-center gap-2 text-[1rem]`}> <span className='text-[1.2rem]'><FaRegCommentDots /> </span><p className='text-sm'>Comments</p> </span>
                                            </div>
                                            {/* modal */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* //& stories carousel */}
                    <Modal show={openModal} size={"md"} onClose={() => setOpenModal(false)}>
                        <Modal.Header>Small modal</Modal.Header>
                        <Modal.Body>
                            <input type="text" onChange={(e) => { setTheComment(e.target.value) }} />
                        </Modal.Body>
                        <Modal.Footer className=''>
                            <div className="w-11 h-10 rounded-full border"></div>
                            <button onClick={addComment}>send</button>
                        </Modal.Footer>
                    </Modal>
                </div >




            </div>
        </div>
    );
};
