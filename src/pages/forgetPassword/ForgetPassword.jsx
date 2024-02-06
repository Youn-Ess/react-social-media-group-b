import { useContext, useState } from "react"
import { MyContext } from "../../utils/contextProvider"
import { Navigate, useNavigate } from "react-router-dom"
import { HiMiniXMark } from "react-icons/hi2";


export const ForgetPassword = () => {
    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)

    const [userName, setUserName] = useState(``)
    const [newPassword, setNewPassword] = useState(``)
    const [confirmNewPassword, setConfirmNewPassword] = useState(``)

    const navigate = useNavigate()

    class Char {
        static specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        static numbers = /\d/;
        static Alphabetic = /[a-zA-Z]/;
    }

    const saveChange = (e) => {
        e.preventDefault()
        if (userName && newPassword && confirmNewPassword) {
            const findUser = dataBase.find(element => element.userName == userName)
            if (findUser) {
                // ^ check password
                // Check for leading or trailing spaces.
                setNewPassword(newPassword.trim())
                // Do not save the newPassword if it has spaces in the middle.
                if (newPassword.includes(` `)) {
                    alert(`your newPassword can't contain spaces`)
                    return
                }
                // Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
                if (!Char.specialChars.test(newPassword)) {
                    alert(`you must put some special characters on your newPassword`)
                    return
                }
                // Require at least 7 characters to confirm the newPassword.
                if (newPassword.length < 7) {
                    alert(`you newPassword is to short please enter a newPassword that have more than 7 charracters`)
                    return
                }
                if (newPassword != confirmNewPassword) {
                    return alert(`password not match`)
                }
                findUser.password = newPassword;
                navigate(`/`)
            } else {
                return alert(`username not exist on the database`)
            }
        } else {
            return alert(`must fill all inputs`)
        }

    }
    return (
        <>
            <div className="bg-[#d6d6d6] min-h-[100vh] flex justify-center items-center">
                <form className="flex flex-col gap-4 w-[30%] bg-white p-3 rounded-md">
                    <div className="flex justify-end">
                        <HiMiniXMark className="text-[2.5rem]" onClick={() => { navigate(`/`) }} />
                    </div>
                    <div className="flex flex-col">
                        <label>username</label>
                        <input type="text" placeholder="username" onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div className="flex flex-col">
                        <label>new password</label>
                        <input type="password" placeholder="password" onChange={(e) => { setNewPassword(e.target.value) }} />
                    </div>
                    <div className="flex flex-col">
                        <label>confirm new password</label>
                        <input type="password" placeholder="password" onChange={(e) => { setConfirmNewPassword(e.target.value) }} />
                    </div>
                    <hr />
                    <div className="flex justify-center">
                        <button className="bg-light-blue-400 p-3 rounded-md" onClick={(e) => { saveChange(e) }}>save changes</button>
                    </div>
                </form>
            </div>
        </>
    )
}