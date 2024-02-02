import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [allGroupsDataBase, setallGroupsDataBase] = useState([
        {
            admins: [`username1`, `username3`],
            name: `younessGroup`,
            description: `group description 1`,
            members: [`username10`, `username20`],
            content: `movies`
        },
        {
            admins: [`username12`, `username2`],
            name: `younessGroup`,
            description: `group description 1`,
            members: [`username10`, `username20`],
            content: `trols`
        }
    ])



    // ! li bgha yfhm achnahia had bio ou infos imchi ichouf lprofile dialo f facebook kayna wahed l section smitha Intro ra fiha
    // ! wahed ajouter une bio (b7ala description 3lik nta) ou modifier les infos had infos fihom ajouter emploi ou scolarite ville actuelle Situation amoureuse Sites web ....
    // ! infos ghaykouno 3la chkl object li fih had infos ou ghaykouno fl array dial infos li kayn 3and kola user 


    // ^ kayn wahed database dial groups li kayna lfo9 hadik hia li ghadi it pusha fiha ayi group tzad ou wst mn dak objet dial goup ghatkoun fih admins ou members ou smia ou type dial lgroup
    // ^ (movies, trols ....)  had database ra 7titha fl constructor ila chfto lta7t ra kayn wahed attribute smito allGroups 
    // ^ kola user ghatkoun 3ando had database bach ila t connecta hadl user n affichiw gaa3 les groups li kaynin
    // ^ ou 3aad kayna myGroups li kat3ni lgroups dial user li ajoutahom bach n9dro n affichiwhom hta houma ila bgha ichouf lgoups dilo 



    // ~ 
    class Users {
        constructor(firstName, lastName, userName, email, phoneNumber, password, profileImage, gender, birthDay, bio, infos, isAdmin, followers, following, myGroups) {

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
            this.bio = bio;
            this.infos = infos;
            this.followers = followers;
            this.following = following;
            this.myGroups = myGroups;
            this.allGroups = allGroupsDataBase;
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
        `10/10/2003`,
        false,
        `bio1`,
        [],
        [],
        [],
        []
    )

    const [dataBase, setDataBase] = useState([
        user1
    ])

    return (
        <>
            <MyContext.Provider value={[dataBase, setDataBase]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

