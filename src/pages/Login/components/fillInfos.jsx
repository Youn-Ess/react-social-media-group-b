import { useContext, useState } from "react"
import { MyContext } from "../../../utils/contextProvider"

import defaultProfileImage from "../../../assets/img/profile.png"
import defaultCoverImage from "../../../assets/img/cover.png"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { HiMiniXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";





export const FillInfos = () => {
    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)

    const connectedUser = connected[0]
    const [forceProfileImgUpdate, setForceProfileImgUpdate] = useState(0)
    const [forceCoverProfileImgUpdate, setForceCoverProfileImgUpdate] = useState(0)

    const navigate = useNavigate()

    const handlProfileImgChange = (e) => {
        const selectedImage = e.target.files[0];
        connectedUser.profileImage = selectedImage
        let connectedInDataBase = dataBase.find(element => element.userName == connectedUser.userName)
        connectedInDataBase.profileImage = selectedImage
        setForceProfileImgUpdate(prev => prev + 1);
    };

    const displayProfileImg = () => {
        return {
            style: {
                backgroundImage: connectedUser.profileImage != null ? `url(${URL.createObjectURL(connectedUser.profileImage)})` : `url(${defaultProfileImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        };
    };



    const handlCoverProfileImgChange = (e) => {
        const selectedImage = e.target.files[0];
        connectedUser.coverProfileImage = selectedImage
        let connectedInDataBase = dataBase.find(element => element.userName == connectedUser.userName)
        connectedInDataBase.coverProfileImage = selectedImage
        setForceCoverProfileImgUpdate(prev => prev + 1);
    };

    const displayCoverProfileImg = () => {
        return {
            style: {
                backgroundImage: connectedUser.coverProfileImage != null ? `url(${URL.createObjectURL(connectedUser.coverProfileImage)})` : `url(${defaultCoverImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
        };
    };



    const deleteProfile = (e) => {
        e.target.parentElement.parentElement.remove()
    }

    const [newDataBase, setNewDataBase] = useState(dataBase.filter(element => element.userName != connectedUser.userName))

    console.log(newDataBase);
    const Search = (e) => {
        let newtab = newDataBase.filter(element => element.firstName.includes(e))
        setNewDataBase(newtab)
        if (!e) {
            setNewDataBase(dataBase.filter(element => element.userName != connectedUser.userName))
        }
    }


    return (
        <>
            <div className="w-[65%] flex flex-col gap-5">
                <div className="flex justify-end">
                    <HiMiniXMark className="text-[2.5rem]" onClick={() => { navigate(`/home`) }} />
                </div>
                <div className="w-[100%] h-[50vh] bg-gray-400 p-3 relative rounded-md ">

                    <label {...displayCoverProfileImg()}
                        key={forceCoverProfileImgUpdate}
                        className="h-[70%] w-[100%] rounded-lg flex"
                        htmlFor="cover-input"
                    >
                    </label>
                    <input onChange={handlCoverProfileImgChange} type="file" id="cover-input" className="hidden" />


                    <div className="absolute bottom-[15%] left-[3%] w-[100%] h-[30%] flex items-end gap-5">
                        <label {...displayProfileImg()}
                            key={forceProfileImgUpdate}
                            className="h-[120%]  w-[13%] rounded-full "
                            htmlFor="profile-input"
                        >
                        </label>
                        <input onChange={handlProfileImgChange} type="file" id="profile-input" className="hidden" />
                        <span className="pb-5 text-[1.5rem] font-bold">{`${connectedUser.firstName} ${connectedUser.lastName}`}</span>
                    </div>

                </div>

                <div className="bg-gray-400 w-[100%] h-[10vh] flex justify-between items-center p-3 rounded-md ">
                    <h1 className="text-[1.5rem] font-bold">Friends</h1>
                    <input type="text" placeholder="Search..." className="border-none rounded-lg" onChange={(e) => { Search(e.target.value) }} />
                </div>

                <div className="bg-gray-400 w-[100%]  flex items-center gap-[1rem] p-3 rounded-md flex-wrap">
                    {newDataBase.map(element =>
                        <>
                            <Card className="w-[calc((100%_/_4)-1rem)] h-[50vh] flex flex-col justify-between">
                                <div color="" className="h-[60%] rounded-lg"
                                    style={{ backgroundImage: element.profileImage ? `url(${element.profileImage})` : `url(${defaultProfileImage})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }}
                                >
                                </div>
                                <CardBody className="flex flex-col p-0 gap-2 items-center">
                                    <Typography variant="h5" color="blue-gray" className="">
                                        <span>{element.firstName} {element.lastName}</span>
                                    </Typography>
                                </CardBody>
                                <CardFooter className="flex flex-col p-0 gap-2 items-center pb-2">
                                    <button className="w-[80%] rounded-md bg-blue-gray-200 py-1">Add friend</button>
                                    <button className="w-[80%] rounded-md bg-blue-gray-200 py-1" onClick={(e) => deleteProfile(e)}>delete</button>
                                </CardFooter>
                            </Card>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}