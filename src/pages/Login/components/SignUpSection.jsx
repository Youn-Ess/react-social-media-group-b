import { useContext, useState } from "react"
import { MyContext } from "../../../utils/contextProvider"
import { HiMiniXMark } from "react-icons/hi2";
import { useNavigationType } from "react-router-dom";
import { AddImgSection } from "./AddImgSection";

export const SignUpSection = ({ step, setStep }) => {
    const [dataBase, setDataBase, connected, setConnected] = useContext(MyContext)


    const [firstName, setFirstName] = useState(``)
    const [lastName, setLastName] = useState(``)
    const [userName, setUserName] = useState(``)
    const [email, setEmail] = useState(``)
    const [phoneNumber, setPhoneNumber] = useState(``)
    const [password, setPassword] = useState(``)
    const [confirmPassword, setConfirmPassword] = useState(``)
    const [day, setDay] = useState(``)
    const [month, setMonth] = useState(``)
    const [year, setYear] = useState(``)
    const [gender, setGender] = useState(``)
    const birthDay = `${day}/${month}/${year}`


    class Char {
        static specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        static numbers = /\d/;
        static Alphabetic = /[a-zA-Z]/;
    }


    const nextPage = (e) => {
        e.preventDefault()
        let newTab = [...dataBase]

        let userExist = newTab.findIndex(element => element.userName == userName)

        if (firstName && lastName && userName && email && phoneNumber && password && confirmPassword && day && month && year && gender) {
            if (userExist == -1) {
                // ^ first name , last name and username
                if (Char.specialChars.test(firstName && lastName && userName)) {
                    return alert(`you can't use those special characters (${Char.specialChars}) on your first , last name or username`)
                }
                if (Char.numbers.test(firstName && lastName && userName)) {
                    return alert(`you can't use numbers on your first, last name or username`);
                }
                if (firstName.length < 5 && lastName.length < 5 && userName) {
                    return alert(`you name is to short please enter a name that have more than 5 charracters`);
                }

                // ^ email

                // Check for leading or trailing spaces.
                // Convert all letters to lowercase.
                setEmail(email.trim().toLowerCase())
                // Do not save the Email if it has spaces in the middle.
                if (email.includes(` `)) {
                    alert(`your email can't contain spaces`);
                    return
                }

                // Do not save the Email if it contain more that one "@" symbol.
                if (email.split(``).filter(char => char == `@`).length > 1) {
                    return alert(`you can't put two atmarks at your email`);
                }
                // Do not save the Email if it does not contain exactly one "@" symbol.
                if (!email.includes(`@`)) {
                    alert(`your email munst contain @ character`);
                    return
                }
                // Do not save the Email if it has fewer than 10 characters (excluding spaces).
                if (email.split(`@`)[1].length == 0) {
                    alert(`your email munst end with some thing like gmail.com`);
                    return
                }
                // Do not save the Email if it does not contain exactly one "." symbol.
                if (!email.split(`@`)[1].includes(`.`)) {
                    alert(`your email munst containe a . after the atmark`);
                    return
                }
                if (email.split(`@`)[0].length < 5) {
                    alert(`your email munst contain 5 characters or more before atmark`);
                    return
                }


                // ^ phone number

                if (!Char.numbers.test(phoneNumber)) {
                    return alert(`enter numbers on phone number input`);
                }

                // ^ check password

                // Check for leading or trailing spaces.
                setPassword(password.trim())
                // Do not save the Password if it has spaces in the middle.
                if (password.includes(` `)) {
                    alert(`your password can't contain spaces`)
                    return
                }
                // Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
                if (!Char.specialChars.test(password)) {
                    alert(`you must put some special characters on your password`)
                    return
                }
                // Require at least 7 characters to confirm the password.
                if (password.length < 7) {
                    alert(`you password is to short please enter a password that have more than 7 charracters`)
                    return
                }

                if (password != confirmPassword) {
                    return alert(`password not match`)
                }

                // ^ birth day
                if (!Char.numbers.test(day) && !Char.numbers.test(month) && year && !Char.numbers.test(year)) {
                    return alert(`enter numbers on birthday inputs`)
                }

                if (day > 31 || day == 0) {
                    return alert(`day not valide`)
                }
                if (month > 12 || month == 0) {
                    return alert(`month not valide`)
                }
                if (year > 2024 || year < 1950 || year == 0) {
                    return alert(`year not valide`)
                }


                const user = {
                    firstName: firstName,
                    lastName: lastName,
                    userName: userName,
                    email: email,
                    phoneNumber: phoneNumber,
                    password: password,
                    gender: gender,
                    birthDay: birthDay,
                    bio: ``,
                    infos:
                    {
                        jobe: ``,
                        schooling: ``,
                        city: ``,
                        relationship: ``
                    },
                    followers: [],
                    following: [],
                    myGroups: [],
                    profileImage: null
                }

                newTab.push(user)
                setDataBase(newTab)


                setConnected([...connected, user])

            } else {
                return alert(`user exist`)
            }

        } else {
            return alert(`must fill all inputs`)
        }
        setStep(step + 1)
    }



    return (
        <>
            <div className="bg-white p-3 w-[30%] ">
                <div className="pb-3 flex justify-between">
                    <div>
                        <h1 className="text-[2.5rem]">Register</h1>
                        <p>it's quick and easy.</p>
                    </div>
                    <div>
                        <HiMiniXMark className="text-[2.5rem]" onClick={() => { setStep(0) }} />
                    </div>
                </div>
                <hr />
                <form className="grid grid-cols-2 gap-4 pt-3" >
                    <div className="flex flex-col">
                        <input type="text" placeholder="First name" onChange={(e) => { setFirstName(e.target.value) }} />
                    </div>
                    <div className="flex flex-col">
                        <input type="text" placeholder="last name" onChange={(e) => { setLastName(e.target.value) }} />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input type="text" placeholder="userName" onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input type="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input type="text" placeholder="phone number" onChange={(e) => { setPhoneNumber(e.target.value) }} />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <input type="password" placeholder="confirme password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="">Date of birth</label>
                        <div className="flex justify-between">
                            <input className="w-[32%]" type="text" placeholder="day" onChange={(e) => { setDay(e.target.value) }} />
                            <input className="w-[32%]" type="text" placeholder="month" onChange={(e) => { setMonth(e.target.value) }} />
                            <input className="w-[32%]" type="text" placeholder="year" onChange={(e) => { setYear(e.target.value) }} />
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label htmlFor="">Gender</label>
                        <select onChange={(e) => { setGender(e.target.value) }}>
                            <option value=""></option>
                            <option value="Man">Man</option>
                            <option value="Women">Women</option>
                        </select>
                    </div>

                    <div className="col-span-2 flex justify-center">
                        <button className="bg-green-600 p-3 rounded-md w-[50%]" onClick={(e) => { nextPage(e) }}>Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}