import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {


    class Users {
        constructor(firstName, lastName, userName, email, phoneNumber, password, profileImage, gender, birthDay, isAdmin, description, followers, following, groups) {

            this.firstName = firstName;
            this.lastName = lastName;
            this.userName = userName;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.password = password;
            this.profileImage = profileImage;
            this.gender = gender;
            this.birthDay = birthDay;
            this.isAdmin = isAdmin;
            this.description = description;
            this.followers = followers;
            this.following = following;
            this.groups = groups;
        }
    }

    let user1 = new Users(
        `youness`,
        `aithaddou`,
        `youness123`,
        `youness@gmail.com`,
        `060606060`,
        `1234`,
        null,
        `male`,
        `10/08/2003`,
        false,
        `description1`,
        [],
        [],
        []
    )
    let user2 = new Users(
        `ghizlane`,
        `jadraoui`,
        `ghizlane123`,
        `ghizlan@gmail.com`,
        `060606060`,
        `1234`,
        null,
        `female`,
        `24/01/2002`,
        false,
        `description2`,
        [],
        [],
        []
    )
    let user3 = new Users(
        `hamza`,
        `yasri`,
        `hamza123`,
        `hamza@gmail.com`,
        `060606060`,
        `1234`,
        null,
        `male`,
        `10/08/1999`,
        false,
        `description3`,
        [],
        [],
        []
    )
    let user4 = new Users(
        `achraf`,
        `bensabir`,
        `achraf123`,
        `achraf@gmail.com`,
        `060606060`,
        `1234`,
        null,
        `male`,
        `10/08/2001`,
        false,
        `description4`,
        [],
        [],
        []
    )
    let user5 = new Users(
        `yahya`,
        `jmilou`,
        `yahya123`,
        `yahya@gmail.com`,
        `060606060`,
        `1234`,
        null,
        `male`,
        `10/08/2010`,
        false,
        `description5`,
        [],
        [],
        []
    )
    let user6 = new Users(
        `med reda`,
        `karim`,
        `reda123`,
        `reda@gmail.com`,
        `060606060`,
        `1234`,
        null,
        `male`,
        `10/08/2003`,
        false,
        `description6`,
        [],
        [],
        []
    )

    const [dataBase, setDataBase] = useState([
        user1, user2, user3, user4, user5, user6
    ])

    return (
        <>
            <MyContext.Provider value={[dataBase, setDataBase]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

