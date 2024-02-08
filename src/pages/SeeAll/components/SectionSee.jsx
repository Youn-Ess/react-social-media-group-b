import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Peugeot208 from "../../../../assets/img/images/208.jpg";
import Peugeot308 from "../../../../assets/img/images/308_Berline_5_Portes.jpg";
import Peugeot508 from "../../../../assets/img/images/508BREAK_5_PORTES.jpg";
import Peugeot508B from "../../../../assets/img/images/508_BERLINE_5_PORTES.jpg";
import Peugeot408 from "../../../../assets/img/images/Nouvelle_408.jpg";
import Peugeot308SW from "../../../../assets/img/308SW_5PORTES.jpg";
import oreille from "../../../../assets/img/images/Clips_D'oreille.webp";
import bracelets from "../../../../assets/img/images/bracelets.webp";
import  BijouxVintage from "../../../../assets/img/images/Bijoux_Vintage.jpg";
import  Montre from "../../../../assets/img/images/Montre.jpg";
import  Lamplune from "../../../../assets/img/images/LampeLune.webp";
import  Élégant from "../../../../assets/img/images/Élégant.webp";
import Pinceaux from "../../../../assets/img/images/Pinceaux.webp";
import rouges from "../../../../assets/img/images/rouges.webp";
import waterproof from "../../../../assets/img/images/waterproof.jpg";
import rangement from "../../../../assets/img/images/rangement.jpg";
import Rihsay from "../../../../assets/img/images/Rihsay.jpg";
import Extensions from "../../../../assets/img/images/Extensions.webp";



const SectionSee = () => {
    const [myAllProducts, setmyAllProducts] = useState([
       


    ])


    // const filterElement = () => {
    //     let newTab = myCars.filter(element => element.categorie == "car");
    //     setMyCars(newTab)
    // }
    // console.log(setMyCars);

    const navigate = useNavigate()
    const { id } = useParams()
    const filterCars = myAllProducts.filter((myAllProducts) => myAllProducts.categorie == "Vehicles")
    const filterAccessoires = myAllProducts.filter((myAllProducts) => myAllProducts.categorie == "Accessoires")

    const filter = myAllProducts.filter((myAllProducts) => myAllProducts.categorie == id)

    return (
        <>
        <div className='absolute left-[24vw] py-5'>
            <div className='w-[74vw] h-[100vh] '>
                    {/* section 2 */}
                    <section className='flex flex-col items-center'>
                        <div className=' flex w-[97%] h-[20vh] rounded-3xl bg-gray-100 items-center  px-4'>
                            <h1 className='text-5xl font-bold p-5'>{filter[0].categorie}</h1>
                        </div>
                        <div className=" p-5  flex  flex-wrap justify-between">    {
                            filter.map((element, index) =>
                                <div className="grid  gap-4 ">
                                    {/*  */}
                                    <div onClick={() => { navigate(`/market/product/${element.title}`) }} key={index} className="  w-[300px]  max-w-sm      ">
                                        <a className=' ' href="#">
                                            <img className=" border rounded rounded-2xl w-[500px] h-[300px] "  src={element.image} alt="product image" />
                                        </a>
                                        <div onClick={() => { navigate(`/market/product/${element.title}`) }} key={index} className="px-5  flex flex-col h-[100px] justify-evenly">
                                            <a href="#">
                                                <h5 onClick={() => { navigate(`/market/product/${element.title}`) }} className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
                                            </a>
                                            <div className="flex items-center justify-center">
                                                <p className="text-xl  text-gray-900 dark:text-white">{element.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                    {/*  */}
                                </div>
                            )
                        }
                        </div>
                    </section>
            </div>

        </div>
            
        </>
    );
};

export default SectionSee;