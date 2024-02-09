
import Header from '../../layouts/Header';
import { SideBare1 } from '../../layouts/sideBare1';
import { SideBare2 } from '../../layouts/sideBare2';
import React, { useContext, useState } from 'react';
import "../Home/home.scss"
import { FirstSection } from './components/HomeFirstSection';
import { FaCloudArrowDown } from "react-icons/fa6";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Carousel,
    IconButton,
} from "@material-tailwind/react";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { MyContext } from '../../utils/contextProvider';
import Heart from "react-heart"
import { FaRegCommentDots } from "react-icons/fa";
import { Modal } from 'flowbite-react';
import { MdAddComment } from 'react-icons/md';
import defaultProfileImage from "../../assets/img/profile.png"
console.log(defaultProfileImage);




export const HomePage = () => {

    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)

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











    return (

        <>
            <Header />
            <SideBare1 />
            <SideBare2 />
            <section className='absolute top-[6rem] w-[90vw] left-[5.3rem]'>
                <FirstSection />
                <div className='flex items-start justify-center p-10'>
                    <div className="w-[55%] flex-col flex items-start justify-center pt-4 border rounded-xl shadow-lg p-10">
                        <div className="pb-5 flex items-center gap-2">
                        <div className="w-12 h-12 border rounded-full" style={{ backgroundImage: `url(${connected[0].profileImage ? URL.createObjectURL(connected[0].profileImage) : defaultProfileImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <p className='font-bold'>Create Post</p>
                    </div>
                    {/* <input className="flex items-center border border-gray-900 rounded-lg pb-20 w-[40vw]" placeholder={`   `} /> */}
                    <div onClick={handleOpen} className="flex items-center border border-gray-900 rounded-lg pb-20 pt-3 h-11 w-[40vw] text-black text-opacity-40 cursor-pointer"><p className='ml-3 mt-2'>what's new {connected[0].userName}...</p></div>
                    <div className="flex w-[100%] justify-start pt-10 gap-12">
                        <button onClick={handleOpen} className='w-[15%] flex items-center gap-3 text-s font-light text-black text-opacity-70'><div className="w-9 h-9 border rounded-full"></div> Photo</button>
                        <button onClick={(e) => { handleOpen2(e) }} className='w-[26%] flex items-center gap-3 text-s font-light text-black text-opacity-70'><div className="w-9 h-9 border rounded-full"></div> Write something</button>
                    </div>
                </div>
            </div>
            <Dialog className='flex flex-col'
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
                allPostsDataBase.map((element, index) => (
                    <div className="flex justify-center items-center pt-3 pb-8" key={index}>
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
                                                {/* <img className='w-[100%] h-fit' src={} alt="" /> */}
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
        </section >
        </>
    );
}
