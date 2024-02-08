import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from "@material-tailwind/react";
import boutique from "../../../assets/img/boutique.png";
import sold from "../../../assets/img/solde.jpg";
import Sale from "../../../assets/img/Online-Advertorial-1000x400-Eng-2-05.jpg";

import { MyContext } from '../../../utils/contextProvider';

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { propTypeChildren } from '@material-tailwind/react/types/components/timeline';
import { propTypesName } from '@material-tailwind/react/types/components/select';






export const Sectionmarket = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)
    // const filterElement = () => {
    //     let newTab = myAllProducts.filter(element => element.categorie == "car");
    //     setmyAllProducts(newTab)
    // }
    // console.log(setmyAllProducts);

    const navigate = useNavigate()
    // const filterCars = myAllProducts.filter((myAllProducts) => myAllProducts.categorie == "Vehicles")
    // const filterBestCars = myAllProducts.filter((myAllProducts) => myAllProducts.sale == "best")
    // const filterAccessoires = myAllProducts.filter((myAllProducts) => myAllProducts.categorie == "Accessoires")
    // const filterMakeup = myAllProducts.filter((myAllProducts) => myAllProducts.categorie == "Makeup")


    const filterProducts = (e) => {
        if (e) {
            let newTab = newDataBase.filter((element) => element.categorie.includes(e))
            setNewDataBase(newTab)
        } else {
            setNewDataBase(marketPlaceDataBase)
        }
    }

    const [productTitle, setProductTitle] = useState(``)
    const [productPrice, setProductPrice] = useState(``)
    const [productDescription, setProductDescription] = useState(``)
    const [productCategorie, setProductCategorie] = useState(``)
    const [productImage, setProductImage] = useState(null)


    const [newDataBase, setNewDataBase] = useState([])
    let connectedUser = connected[0].userName
    const addProduct = () => {
        if (productTitle && productPrice && productDescription && productCategorie && productImage) {
            let newProduct = {
                username: connectedUser,
                title: productTitle,
                price: productPrice,
                image: productImage,
                description: productDescription,
                categorie: productCategorie
            }
            setMarketPlaceDataBase([...marketPlaceDataBase, newProduct])
            let newTab = [...marketPlaceDataBase]
            newTab.push(newProduct)
            setNewDataBase(newTab)
            handleOpen()
        } else {
            alert(`must fill all inputs`)
        }
    }

    console.log(newDataBase);


    const handlImageProduct = (e) => {
        const selectedImage = URL.createObjectURL(e.target.files[0])
        setProductImage(selectedImage)
    }
    console.log(marketPlaceDataBase);

    return (
        <>
            <div>

                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader>Post your product</DialogHeader>
                    <DialogBody>
                        <form action="" className='flex flex-col justify-evenly'>
                            <label htmlFor="">product title</label>
                            <input type="text" onChange={(e) => { setProductTitle(e.target.value) }} />
                            <label htmlFor="">product price</label>
                            <input type="text" onChange={(e) => { setProductPrice(e.target.value) }} />
                            <label htmlFor="">product description</label>
                            <input type="text" onChange={(e) => { setProductDescription(e.target.value) }} />
                            <label htmlFor="">product categorie</label>
                            <input type="text" onChange={(e) => { setProductCategorie(e.target.value) }} />
                            <label htmlFor="">product image</label>
                            <input type="file" onChange={handlImageProduct} />
                        </form>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="green" onClick={addProduct}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>

            <div className='absolute left-[24vw] py-5 '>
                <div className=' w-[74vw] h-[100vh] '>
                    {/* first section carousel */}
                    <section>
                        <Carousel className="rounded-xl">
                            <img
                                src={boutique}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src={sold}
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src={Sale}
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                    </section>
                    {/* section 2 */}
                    <section>
                        <div className='flex w-[100%] items-center justify-evenly'>
                            <input type="search" onChange={(e) => { filterProducts(e.target.value) }} />
                            <Button onClick={handleOpen} variant="gradient">
                                post product
                            </Button>                        </div>
                        <div className=" p-5  flex  flex-wrap justify-evenly">    {
                            newDataBase.map((element, index) =>
                                <div className="grid ">
                                    {/*  */}
                                    <div onClick={() => { navigate(`/market/${element.title}`) }} key={index} className=" p-5 w-[300px]  max-w-sm      ">
                                        <a className='' href="#" >
                                            <img className=" border rounded rounded-2xl w-[700px] h-[200px] " src={element.image} alt="product image" />
                                        </a>
                                        <div className="px-5  flex flex-col h-[100px] justify-evenly">
                                            <a onClick={() => { navigate(`/market/${element.title}`) }} key={index} href="#">
                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
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

export default Sectionmarket;