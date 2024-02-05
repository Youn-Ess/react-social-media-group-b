import { FileInput, Label } from 'flowbite-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { MyContext } from '../../../utils/contextProvider';

import profile from "../../../assets/img/profile.png"

export const AddImgSection = ({ step, setStep }) => {

    const [dataBase, setDataBase, connected, setConnected] = useContext(MyContext)


    const [forceUpdate, setForceUpdate] = useState(0);


    const nextPage = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        connected[0].profileImage = selectedImage
        let connectedInDataBase = dataBase.find(element => element.userName == connected[0].userName)
        connectedInDataBase.profileImage = selectedImage

        setForceUpdate(prev => prev + 1);

    };

    const displayImg = () => {
        return {
            style: {
                backgroundImage: connected[0].profileImage ? `url(${URL.createObjectURL(connected[0].profileImage)})` : `url(${profile})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }
        };
    };

    // useEffect(() => {
    //     // You can perform additional actions after the image has been updated
    //     console.log("Image has been updated");
    // }, [connected[0].profileImage]); // Trigger this effect when the image changes





    return (
        <>
            <div className="bg-white p-3 w-[20%]">
                <div className="flex justify-end">
                    <span className="text-[0.9rem] text-light-blue-900 hover:underline  underline-offset-2" onClick={(e) => { nextPage(e) }}>next</span>
                </div>
                <div>
                    <h1 className="text-center">add your profile image</h1>
                </div>
                <div className="flex  items-center justify-center ">
                    <Label
                        htmlFor="dropzone-file"
                        className="dark:hover:bg-bray-800 flex p-[6rem] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100  "
                        {...displayImg()}
                        key={forceUpdate}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <IoCloudUploadOutline className="text-[3rem] text-gray-300 " style={{ opacity: connected[0].profileImage ? 0 : 1 }} />
                        </div>
                        <FileInput onChange={handleImageChange} id="dropzone-file" className="hidden" />
                    </Label>
                </div>
            </div >
        </>
    )
}