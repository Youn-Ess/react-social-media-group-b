
import React, { useContext, useEffect, useMemo, useState } from 'react';
import './HomeFirstSection.scss'
import { Button, ButtonGroup } from 'flowbite-react';
import { Dialog, DialogBody, DialogFooter, DialogHeader, navbar } from '@material-tailwind/react';
import { IoMdImages } from "react-icons/io";
import { IoText } from "react-icons/io5";
import { MyContext } from '../../../utils/contextProvider';
import defaultProfileImage from "../../../assets/img/profile.png"


import user1pic from "../../../assets/img/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import user2pic from "../../../assets/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import user3pic from "../../../assets/img/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg"
import user4pic from "../../../assets/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import user5pic from "../../../assets/img/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
import { ProfilePage } from '../../Profile/Profile';

export const FirstSection = () => {

    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)


    const [size, setSize] = useState(null);
    const [size2, setSize2] = useState(null);

    const handleOpen = (value) => {
        setSize(value)
        setStoryBoolean("default")
    };
    const handleOpen2 = (value) => {
        setTimeout(() => {
            setSize2(null);
        }, 300000);
        setSize2(value)
    };
    console.log(dataBase);

    // useEffect(() => {
    //     const tab = [];
    //     dataBase.forEach(element => tab.push(element.myStories));
    //     setStoriesDataBase(tab);
    // }, []);

    console.log(storiesDataBase);


    let storyObj = {}

    // const [stories, setstories] = useState([
    //     storyObj = {
    //         name: "1",
    //         file: "",
    //         text: "kkkkkkk",
    //     },
    //     storyObj = {
    //         name: "2",
    //         file: "",
    //         text: "",
    //     },
    //     storyObj = {
    //         name: "3",
    //         file: "",
    //         text: "",
    //     },
    //     storyObj = {
    //         name: "4",
    //         file: "",
    //         text: "",
    //     },
    //     storyObj = {
    //         name: "5",
    //         file: "",
    //         text: "",
    //     },
    //     storyObj = {
    //         name: "6",
    //         file: "",
    //         text: "",
    //     },
    //     storyObj = {
    //         name: "7",
    //         file: "",
    //         text: "",
    //     }
    // ]);




    const [storyPic, setStoryPic] = useState();
    const [storyText, setStoryText] = useState("");
    const [storyName, setStoryName] = useState(""); // State to store the name of the story

    // Update userStory object when storyPic or storyName changes
    let userStory = {
        name: connected[0].userName,
        profileImage: connected[0].profileImage,
        file: storyPic ? storyPic : "", // Use storyPic to generate URL if available
        text: storyText,
    }
    const [storyBoolean, setStoryBoolean] = useState("default");

    const storyCreationPic = (e) => {
        setStoryPic(e.target.files[0]);
        setStoryBoolean("pic");
    };

    const storyCreationText = () => {
        setStoryBoolean("text");
    };

    const addStory = () => {
        const newUserStory = {
            name: storyName,
            file: storyPic ? URL.createObjectURL(storyPic) : defaultProfileImage, // Convert storyPic to URL if available
            text: storyText,
            profileImage: connected[0].profileImage,
        };

        const updatedStoriesDataBase = [newUserStory, ...storiesDataBase];

        setStoriesDataBase(updatedStoriesDataBase);

        handleOpen();
        setStoryPic(null);
        setStoryText("");
        setStoryName("");
        
    };

    console.log(connected[0].profileImage);

    return (
        <>
            <div className="flex justify-center">
                <div className="stories-carousel flex w-[50%] gap-2">
                    <div onClick={() => handleOpen("xs")} className="stories h-44 flex items-end justify-center cursor-pointer bg-gray-400 min-w-[16%]">
                        <div className="w-10 h-10 border flex items-center justify-center text-2xl rounded-full mb-5">+</div>
                    </div>
                    {
                        storiesDataBase.map((story, index) => (
                            <React.Fragment key={index}>
                                <div onClick={() => handleOpen2(index)} className="relative stories cursor-pointer h-44 flex flex-col items-center justify-center bg-red-700 min-w-[16%]">
                                    {
                                        story.file && (
                                            <div className="flex h-full justify-center w-full rounded-[10px]" style={{ backgroundImage: `${userStory.file ? `url(URL.createObjectURL(${userStory.file}))` : `url(${story.file})`} `, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                        )
                                    }
                                    <div key={index} className="absolute bottom-2 w-10 h-10 border rounded-full" style={{ backgroundImage: `url(${URL.createObjectURL(story.profileImage)})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                                </div>
                                <Dialog
                                    className=''
                                    open={size2 === index}
                                    size={size2 || "s"}
                                    handler={() => handleOpen2(null)}
                                >
                                    <DialogBody className='flex justify-center items-center'>
                                        <div className="h-fit w-full ">
                                            {
                                                story.file ? (
                                                    <div className="flex h-[50vh] justify-center w-full rounded-[10px] " style={{ backgroundImage: `${userStory.file ? `url(URL.createObjectURL(${userStory.file}))` : `url(${story.file})`} `, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}>{story.name}</div>
                                                )
                                                    : story.text ?
                                                        (
                                                            <div className="flex h-[20vh] justify-center w-full rounded-[10px] " >
                                                                <p>{story.text}</p>
                                                            </div>
                                                        ) : ""
                                            }
                                        </div>
                                    </DialogBody>
                                </Dialog>
                            </React.Fragment>
                        ))
                    }

                </div>

                <Dialog
                    open={
                        size === "xs"
                    }
                    size={size || "xs"}
                    handler={handleOpen}
                >
                    {
                        storyBoolean == "default" ?
                            <>
                                <DialogHeader>Add to your story</DialogHeader>
                                <DialogBody>
                                    <div className="flex justify-around h-56">
                                        <Button onClick={() => { }} className='add-story w-40 bg-indigo-600'>
                                            <div className="flex flex-col items-center">
                                                <p className='w-10 h-10 border-2 text-lg rounded-full flex items-center justify-center'>
                                                    <IoMdImages />
                                                </p>
                                                <p className='flex items-center gap-1 pt-2'>
                                                    <span className='text-lg'>+</span>add pics/story
                                                </p>
                                                <input onChange={(e) => { storyCreationPic(e) }} multiple className='w-full h-full cursor-pointer' type="file" name="" id="" />
                                            </div>
                                        </Button>
                                        <Button onClick={() => { storyCreationText() }} className='add-story w-40 bg-[#df3939] '>
                                            <div className="flex flex-col items-center">
                                                <p className='w-10 h-10 border-2 text-lg rounded-full flex items-center justify-center'>
                                                    <IoText />
                                                </p>
                                                <p className='flex items-center gap-1 pt-2'>
                                                    <span className='text-lg'>+</span>add text
                                                </p>
                                            </div>
                                        </Button>
                                    </div>
                                </DialogBody>
                            </>
                            : storyBoolean === "text" ?
                                <DialogBody className=''>
                                    <div className="h-72">
                                        <div className="flex justify-end">
                                            <button onClick={handleOpen} className='font-bold text-black opacity-70'>X</button>
                                        </div>
                                        <div className="pt-3">
                                            <textarea onChange={(e) => { setStoryText(e.target.value) }} className='h-52 w-full text-center border-black border-opacity-20' name="" id="" cols="30" rows="10">
                                            </textarea>
                                        </div>
                                        <div className="flex justify-end items-end pt-2">
                                            <Button onClick={addStory}>Add story</Button>
                                        </div>
                                    </div>
                                </DialogBody>
                                : storyBoolean === "pic" ?
                                    <DialogBody className=''>
                                        <div className="h-fit">
                                            <div className="flex justify-end">
                                                <button onClick={handleOpen} className='font-bold text-black opacity-70'>X</button>
                                            </div>
                                            {
                                                userStory.file && (
                                                    <div className=" h-52 flex justify-center w-[100%] " style={{ backgroundImage: `url(${URL.createObjectURL(userStory.file)})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}></div>
                                                )
                                            }
                                            <div className="flex justify-end items-end pt-2">
                                                <Button onClick={addStory}>Add story</Button>
                                            </div>
                                        </div>
                                    </DialogBody>
                                    : ""
                    }
                </Dialog>


            </div >

        </>
    );
}
