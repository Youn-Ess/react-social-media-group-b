import { useContext, useState } from "react"
import { MyContext } from "../../../utils/contextProvider"
import { useNavigate } from "react-router-dom"

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
                setConnected(connectedUser)
                // navigate(`/profile/${newTab[connectedUser].userName}`)
                alert(`user exist`)
            } else {
                alert("unvalide input username or password wrong")
            }
        } else {
            alert(`must fill all inputs`)
        }
    }

    return (
        <>
            <div className="w-[70%]  flex justify-between items-center">
                <div className="">
                    <h1 className="text-[3.5rem]">Project</h1>
                    <p className="text-[1.5rem]">description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatem.</p>
                </div>

                <form className="flex flex-col gap-4 w-[60%] bg-white p-3 rounded-md">
                    <div className="flex flex-col">
                        <label>username</label>
                        <input type="text" placeholder="username" onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div className="flex flex-col">
                        <label>password</label>
                        <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button className="bg-light-blue-400 p-3 rounded-md" onClick={(e) => { login(e) }}>Log in</button>
                    <p className="text-center text-[0.9rem] text-light-blue-900 hover:underline  underline-offset-2" onClick={() => { navigate(`/forgetpassword`) }}>Forgot your password ?</p>
                    <hr />
                    <div className="flex justify-center">
                        <button className="bg-green-600 p-3 rounded-md w-[60%]" onClick={(e) => { nextPage(e) }}>Create new account</button>
                    </div>
                </form>
            </div>
        </>
    )
}