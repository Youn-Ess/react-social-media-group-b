import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import { useContext } from "react";
import { MyContext } from "../../../utils/contextProvider";

import profile from "../../../assets/img/profile.png"


export const SuggestionsSection = () => {
    const [dataBase, setDataBase, connected, setConnected] = useContext(MyContext)
    let newDataBase = dataBase.filter(element => element.userName != connected[0].userName)
    const deleteProfile = (e) => {
        console.log(e.target.parentElement.parentElement.remove())
    }

    console.log(dataBase);

    return (
        <>
            <div className="flex flex-col w-[80%]">
                <div className="flex justify-end ">
                    <span className="text-[0.9rem] text-light-blue-900 hover:underline  underline-offset-2">next</span>
                </div>
                <div className=" w-[100%] flex flex-wrap py-[5rem] gap-4 ">
                    {newDataBase.map(element =>
                        <>
                            <Card className=" w-[19%] h-[50vh] flex flex-col justify-between">
                                <div color="" className="h-[60%] rounded-lg"
                                    style={{ backgroundImage: element.profileImage ? `url(${URL.createObjectURL(element.profileImage)})` : `url(${profile})`, backgroundPosition: `center`, backgroundSize: `contain`, backgroundRepeat: `no-repeat` }}
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
            </div >
        </>
    )
}