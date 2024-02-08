import { useContext, useState } from "react"
import { MyContext } from "../../../utils/contextProvider"
import { useNavigate } from "react-router-dom"
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Checkbox } from "flowbite-react";
import image from "../../../assets/img/Tablet login-amico.png"


export const LoginSection = ({ step, setStep }) => {
    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)


    const navigate = useNavigate()

    const nextPage = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    const [userName, setUserName] = useState(``)
    const [password, setPassword] = useState(``)

    function today() {
        const now = new Date()
        const formattedDate = `${now.getUTCMinutes()}`
        return console.log(formattedDate);
    }


    const login = (e) => {
        e.preventDefault()
        let newTab = [...dataBase]
        if (userName && password) {
            let connectedUser = newTab.find((element => element.userName == userName && element.password == password))
            if (connectedUser) {
                setConnected([...connected, connectedUser])
                alert(`user exist`)
                navigate(`/home`)
            } else {
                alert("unvalide input username or password wrong")
            }
        } else {
            alert(`must fill all inputs`)
        }
    }

    return (
        <>
        <section className="flex items-center">
            <div>
                <img className="w-[45vw]" src={image} alt="" />
            </div>
            <div className="w-[70%]  flex flex-col justify-between items-center">
                <h1 className="text-[3.5rem] font-bold w-[38vw] text-start">Login Into Your Account</h1>
                <form className="flex flex-col gap-4 w-[40vw] p-3 rounded-md">
                    <div className="flex flex-col relative">
                        <input className="pl-12 w-[35vw] font-bold h-[10vh] rounded-md" type="text" placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
                        <HiOutlineMail className="absolute text-4xl top-3 left-2" />
                    </div>
                    <div className="flex flex-col relative">
                        <input className="pl-12 w-[35vw] font-bold h-[10vh] rounded-md" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        <RiLockPasswordLine className="absolute text-4xl top-3 left-2" />
                    </div>
                    <div className="flex items-center justify-between w-[35vw]">
                        <div className="flex items-center">
                            <Checkbox className="w-6 h-6 mr-3 cursor-pointer"/>
                            <h1 className="font-bold">Remember Me</h1>
                        </div>
                        <p className="text-center text-[0.9rem]  hover:underline  underline-offset-2 font-bold cursor-pointer" onClick={() => { navigate(`/forgetpassword`) }}>Forgot your password ?</p>
                    </div>
                    <button className="bg-light-blue-400 p-3 rounded-md w-[35vw] h-[10vh] font-bold" onClick={(e) => { login(e) }}>Log in</button>
                        <button className="text-start font-bold" onClick={(e) => { nextPage(e) }}>Don't have account! <span className="text-blue-600 border-b-2 border-blue-600">Register</span></button>
                </form>
            </div>
        </section>
        </>
    )
}