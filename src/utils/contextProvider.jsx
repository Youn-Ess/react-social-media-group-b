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

    const [marketPlaceDataBase, setMarketPlaceDataBase] = useState([
        // {
        //     title: "Nouvelle 208 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot208,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 308 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot308SW,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 508 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot508,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 508 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot508B,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 408 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot408,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 208 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot208,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 308 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot308SW,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 508 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot508,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 508 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot508B,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 408 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot408,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 408 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot208,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // {
        //     title: "Nouvelle 208 BERLINE",
        //     price: "20 830 €",
        //     image: Peugeot308,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Vehicles"
        // },
        // // * accessoires
        // {
        //     title: "Clips_D'oreille",
        //     price: "28 €",
        //     image: oreille,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "4 pcs Lots de bracelets",
        //     price: "83 €",
        //     image: bracelets,
        //     description: "4 pcs Lots de bracelets à la mode pour femmes",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "48 Pcs De Boucles ",
        //     price: "830 €",
        //     image: BijouxVintage,
        //     description: "48 Pcs De Boucles D'oreilles À Anneaux Délicats En Alliage Plaqué Or Bijoux Vintage Élégant Grand Ensemble De Boucles D'oreilles Cadeau Pour Les Femmes",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "6pcs/set Montre Pour Femmes ",
        //     price: "200 €",
        //     image: Montre,
        //     description: "6pcs/set Montre Pour Femmes De Luxe En Quartz Avec Strass, Montre Analogique En Acier Inoxydable Et Ensemble De Bijoux, Cadeau Pour Maman Et Elle",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "Lamp Lune ",
        //     price: "530 €",
        //     image: Lamplune,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "Exquis Élégant Boucles",
        //     price: "600 €",
        //     image: Élégant,
        //     description: "Exquis Élégant Boucles D'oreilles Collier Bracelet Ensemble - Temu France",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "Clips_D'oreille ",
        //     price: "28 €",
        //     image: oreille,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "4 pcs Lots de bracelets",
        //     price: "83 €",
        //     image: bracelets,
        //     description: "4 pcs Lots de bracelets à la mode pour femmes",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "48 Pcs De Boucles ",
        //     price: "830 €",
        //     image: BijouxVintage,
        //     description: "48 Pcs De Boucles D'oreilles À Anneaux Délicats En Alliage Plaqué Or Bijoux Vintage Élégant Grand Ensemble De Boucles D'oreilles Cadeau Pour Les Femmes",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "6pcs/set Montre Pour Femmes ",
        //     price: "200 €",
        //     image: Montre,
        //     description: "6pcs/set Montre Pour Femmes De Luxe En Quartz Avec Strass, Montre Analogique En Acier Inoxydable Et Ensemble De Bijoux, Cadeau Pour Maman Et Elle",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "Lamp Lune ",
        //     price: "530 €",
        //     image: Lamplune,
        //     description: "Borne de recharge offerte sur véhicule électrique et + 400 € de remise avec le code LION_STORE",
        //     categorie: "Accessoires"
        // },
        // {
        //     title: "Exquis Élégant Boucles",
        //     price: "600 €",
        //     image: Élégant,
        //     description: "Exquis Élégant Boucles D'oreilles Collier Bracelet Ensemble - Temu France",
        //     categorie: "Accessoires"
        // },
        // // * Makeup
        // {
        //     title: "Pinceaux De Maquillage",
        //     price: "10 €",
        //     image: Pinceaux,
        //     description: "13Pcs Pinceaux De Maquillage Doux Et Moelleux Professionnels Pour Fond De Teint, Blush, Poudre, Ombre À Paupières, Kabuki, Mélange De Maquillage, Outils De Beauté Cadeau De Saint-Valentin Pour Petite Amie",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "set de rouges à lèvres",
        //     price: "7.58 €",
        //     image: rouges,
        //     description: "set de rouges à lèvres longue durée, nouveaux modèles pour femme étanches, cosmétiques/maquillage des lèvres",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Stylo à sourcils waterproof",
        //     price: "10 €",
        //     image: waterproof,
        //     description: "Stylo à sourcils waterproof  Formule longue durée, sans taches, anti-transpiration pour un maquillage naturel",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Support de rangement",
        //     price: "10 €",
        //     image: rangement,
        //     description: "Support de rangement léger pour pinceaux de maquillage, 1 pièce, rangez vos produits cosmétiques en toute simplicité",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Rihsay 12 Couleurs Rouge",
        //     price: "10 €",
        //     image: Rihsay,
        //     description: "Rihsay 12 Couleurs Rouge à Lèvres Mat Longue Tenue Gloss Repulpant Lèvres Brillant à Lèvres",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Extensions De Queue",
        //     price: "10 €",
        //     image: Extensions,
        //     description: "Extensions De Queue De Cheval Ondulée Longue - Pièce De Cheveux Synthétiques À Clipser De 22 Pouces Pour Femmes - Ajoutez Du Volume Et Du Style À Vos Cheveux",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Pinceaux De Maquillage",
        //     price: "10 €",
        //     image: Pinceaux,
        //     description: "13Pcs Pinceaux De Maquillage Doux Et Moelleux Professionnels Pour Fond De Teint, Blush, Poudre, Ombre À Paupières, Kabuki, Mélange De Maquillage, Outils De Beauté Cadeau De Saint-Valentin Pour Petite Amie",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "set de rouges à lèvres",
        //     price: "7.58 €",
        //     image: rouges,
        //     description: "set de rouges à lèvres longue durée, nouveaux modèles pour femme étanches, cosmétiques/maquillage des lèvres",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Stylo à sourcils waterproof",
        //     price: "10 €",
        //     image: waterproof,
        //     description: "Stylo à sourcils waterproof  Formule longue durée, sans taches, anti-transpiration pour un maquillage naturel",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Support de rangement",
        //     price: "10 €",
        //     image: rangement,
        //     description: "Support de rangement léger pour pinceaux de maquillage, 1 pièce, rangez vos produits cosmétiques en toute simplicité",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Rihsay 12 Couleurs Rouge",
        //     price: "10 €",
        //     image: Rihsay,
        //     description: "Rihsay 12 Couleurs Rouge à Lèvres Mat Longue Tenue Gloss Repulpant Lèvres Brillant à Lèvres",
        //     categorie: "Makeup"
        // },
        // {
        //     title: "Extensions De Queue",
        //     price: "10 €",
        //     image: Extensions,
        //     description: "Extensions De Queue De Cheval Ondulée Longue - Pièce De Cheveux Synthétiques À Clipser De 22 Pouces Pour Femmes - Ajoutez Du Volume Et Du Style À Vos Cheveux",
        //     categorie: "Makeup"
        // },

    ])

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
    console.log(connected);

    return (
        <>
            <MyContext.Provider value={[dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase,]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

