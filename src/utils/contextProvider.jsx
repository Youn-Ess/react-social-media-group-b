import { logDOM } from "@testing-library/react";
import { createContext, useState } from "react";

import user1pic from "../assets/img/aiony-haust-3TLl_97HNJo-unsplash.jpg"
import user2pic from "../assets/img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
import user3pic from "../assets/img/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg"
import user4pic from "../assets/img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
import user5pic from "../assets/img/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"


import Peugeot208 from "../assets/img/images/208.jpg";
import Peugeot308 from "../assets/img/images/308_Berline_5_Portes.jpg";
import Peugeot508 from "../assets/img/images/508BREAK_5_PORTES.jpg";
import Peugeot508B from "../assets/img/images/508_BERLINE_5_PORTES.jpg";
import Peugeot408 from "../assets/img/images/Nouvelle_408.jpg";
import Peugeot308SW from "../assets/img/308SW_5PORTES.jpg";
import oreille from "../assets/img/images/Clips_D'oreille.webp";
import bracelets from "../assets/img/images/bracelets.webp";
import BijouxVintage from "../assets/img/images/Bijoux_Vintage.jpg";
import Montre from "../assets/img/images/Montre.jpg";
import Lamplune from "../assets/img/images/LampeLune.webp";
import Élégant from "../assets/img/images/Élégant.webp";
import Pinceaux from "../assets/img/images/Pinceaux.webp";
import rouges from "../assets/img/images/rouges.webp";
import waterproof from "../assets/img/images/waterproof.jpg";
import rangement from "../assets/img/images/rangement.jpg";
import Rihsay from "../assets/img/images/Rihsay.jpg";
import Extensions from "../assets/img/images/Extensions.webp";


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
            admins: [`username12`],
            name: `younessGroup`,
            description: `group description 1`,
            members: [`username10`, `username20`],
            content: `trolls`
        }
    ])

    const [allPostsDataBase, setAllPostsDataBase] = useState([])

    const [marketPlaceDataBase, setMarketPlaceDataBase] = useState([])

    const [storiesDataBase, setStoriesDataBase] = useState([])

    // ! li bgha yfhm achnahia had bio ou infos imchi ichouf lprofile dialo f facebook kayna wahed l section smitha Intro ra fiha
    // ! wahed ajouter une bio (b7ala description 3lik nta) ou modifier les infos had infos fihom ajouter emploi ou scolarite ville actuelle Situation amoureuse Sites web ....
    // ! infos ghaykouno 3la chkl object li fih had infos ou ghaykouno fl array dial infos li kayn 3and kola user 


    // ^ kayn wahed database dial groups li kayna lfo9 hadik hia li ghadi it pusha fiha ayi group tzad ou wst mn dak objet dial goup ghatkoun fih admins ou members ou smia ou type dial lgroup
    // ^ (movies, trols ....)  had database ra 7titha fl constructor ila chfto lta7t ra kayn wahed attribute smito allGroups 
    // ^ kola user ghatkoun 3ando had database bach ila t connecta hadl user n affichiw gaa3 les groups li kaynin
    // ^ ou 3aad kayna myGroups li kat3ni lgroups dial user li ajoutahom bach n9dro n affichiwhom hta houma ila bgha ichouf lgoups dilo 


    let user1 = {
        firstName: `youness`,
        lastName: `aithaddou`,
        userName: `youness12`,
        email: `youness@gmail.com`,
        phoneNumber: `06373733737`,
        password: `youness123`,
        gender: `Male`,
        birthDay: `12/10/2003`,
        bio: `bio1`,
        infos:
        {
            jobe: `ingenieur`,
            schooling: `m5`,
            city: `casa`,
            relationship: `single`
        },
        followers: [],
        following: [],
        myGroups: [],
        myProducts: [],
        myPosts: [],
        myStories: {
            name: "1",
            file: user1pic,
            text: "Lorem, ipsum dolor sit amet consectetur saepe aperiam maiores neque doloremque officia dolorem necessitatibus perferendis quae?",
            profileImage: user1pic,
        },
        profileImage: user1pic,
        coverProfileImage: null
    }
    let user2 = {
        firstName: `ahmed`,
        lastName: `aithaddou`,
        userName: `ahmed12`,
        email: `ahmed@gmail.com`,
        phoneNumber: `06373733737`,
        password: `ahmed123`,
        gender: `Male`,
        birthDay: `12/10/2003`,
        bio: `bio1`,
        infos:
        {
            jobe: `ingenieur`,
            schooling: `m5`,
            city: `casa`,
            relationship: `single`
        },
        followers: [],
        following: [],
        myGroups: [],
        myProducts: [],
        myPosts: [],
        myStories: {
            name: "2",
            file: user2pic,
            text: "kkkkkkk",
            profileImage: user2pic,
        },
        profileImage: user2pic,
        coverProfileImage: null
    }

    let user3 = {
        firstName: `achraf`,
        lastName: `aithaddou`,
        userName: `achraf12`,
        email: `achraf@gmail.com`,
        phoneNumber: `06373733737`,
        password: `achraf123`,
        gender: `Male`,
        birthDay: `12/10/2003`,
        bio: `bio1`,
        infos:
        {
            jobe: `ingenieur`,
            schooling: `m5`,
            city: `casa`,
            relationship: `single`
        },
        followers: [],
        following: [],
        myGroups: [],
        myProducts: [],
        myPosts: [],
        myStories: {
            name: "3",
            file: user3pic,
            text: "kkkkkkk",
            profileImage: user3pic,
        },
        profileImage: user3pic,
        coverProfileImage: null
    }
    let user4 = {
        firstName: `achraf`,
        lastName: `aithaddou`,
        userName: `achraf12`,
        email: `achraf@gmail.com`,
        phoneNumber: `06373733737`,
        password: `achraf123`,
        gender: `Male`,
        birthDay: `12/10/2003`,
        bio: `bio1`,
        infos:
        {
            jobe: `ingenieur`,
            schooling: `m5`,
            city: `casa`,
            relationship: `single`
        },
        followers: [],
        following: [],
        myGroups: [],
        myProducts: [],
        myPosts: [],
        myStories: {
            name: "4",
            file: user4pic,
            text: "kkkkkkk",
            profileImage: user4pic,
        },
        profileImage: user4pic,
        coverProfileImage: null
    }

    let user5 = {
        firstName: `chraf`,
        lastName: `aithaddou`,
        userName: `achraf12`,
        email: `achraf@gmail.com`,
        phoneNumber: `06373733737`,
        password: `achraf123`,
        gender: `Male`,
        birthDay: `12/10/2003`,
        bio: `bio1`,
        infos:
        {
            jobe: `ingenieur`,
            schooling: `m5`,
            city: `casa`,
            relationship: `single`
        },
        followers: [],
        following: [],
        myGroups: [],
        myProducts: [],
        myPosts: [],
        myStories: {
            name: "5",
            file: user5pic,
            text: "kkkkkkk",
            profileImage: user5pic,
        },
        profileImage: user5pic,
        coverProfileImage: null
    }

    const [dataBase, setDataBase] = useState([
        
    ])

    const [connected, setConnected] = useState([])
  
    return (
        <>
            <MyContext.Provider value={[dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase,]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

