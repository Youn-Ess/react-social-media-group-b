import { element } from 'prop-types';
import React from 'react';




export const FriendsProfile = () => {



    const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)
    return (
        <div>
            {
                dataBase.map((element , index) =>(
                    <div>
                        <div class="profile w-[100%] h-[50%] gap-3 flex flex-col  bg-slate-400 overflow-hidden z-10  outline rounded-lg p-0  relative  justify-evenly ">
                <input type="file" onChange={handleChange}
                    class=" coverPhoto w-[10%] h-[5%] right-0 opacity-0 bottom-[10.5rem] overflow-hidden z-10 bg-blue-gray-600  border-[0px]   flex flex-col  rounded-lg absolute" />
                <CiEdit className=' text-3xl mb-1  bottom-[10.5rem] right-0 text-gray-300 bg-blue-gray-500 z-0 bg-opacity-30 rounded-tl-lg absolute ' />
                {

                }
                <img src={URL.createObjectURL(element[index].coverProfileImage)} className=' w-[100%] h-[60%] border-0 bg-blue-gray-900 rounded-lg overflow-hidden' />

                <input type="file" onChange={handleChange2}
                    class=" profilepic w-[2%] h-[5%]  overflow-hidden opacity-0 bottom-[10rem] left-[9.5rem] rounded-full  bg-red-400   z-20  absolute " />
                <CiEdit className=' text-3xl mb-1 w-[7%] h-[5%]  bottom-[10rem] left-[8rem] text-white  z-10     rounded-tl-lg rounded-br-full absolute  cursor-pointer' />

                <img src={URL.createObjectURL(element[index].profileImage)} className="w-[12%] h-[25%]   bg-blue-gray-900 overflow-hidden  rounded-full absolute left-[5vw] bottom-[10rem] z-20" variant="gradient" />

                <div class=" h-5 flex " >

                    <h5 onClick={() => { navigate("/profile") }} class="block mb-2 font-sans text-xl antialiased font-semibold ml-[5rem] hover:cursor-pointer select-none leading-snug tracking-normal text-blue-gray-900">
                        {element[index].userName}
                    </h5>


                    <div className="accountFoloow w-[75%] h-10 flex justify-center gap-24  text-center items-center">
                        <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>posts</b> 000</div>
                        <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>followers</b> 000</div>
                        <div className='h-[100%] w-[10%] flex flex-col justify-center items-center'><b>follow</b> 000</div>
                    </div>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">

                    </p>

                </div>

                <div class="p-6 pt-0 flex items-center">
                    <Menu >
                        <MenuHandler>
                            <IconButton variant="text">


                                <button
                                    class="align-middle select-none font-sans w-[100%] font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-blue-gray-900  shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                    type="button">
                                    <p className="w-[100%]">More</p>
                                    <path
                                        fillRule="evenodd"
                                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                        clipRule="evenodd"
                                    />
                                </button>


                            </IconButton>
                        </MenuHandler>
                        <MenuList className="flex flex-col gap-2">
                            <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">

                                <div className="flex flex-col gap-1">
                                    <Typography variant="small" color="gray" className="font-semibold flex">
                                        <Avatar
                                            variant="circular"
                                            alt="natali craig"
                                            src={URL.createObjectURL(connected[0].profileImage)}
                                        />
                                        <div>
                                            <h1>Account creation</h1>
                                            <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                                                <ClockIcon />
                                                Account created on : 01/01/2015
                                            </Typography>
                                        </div>
                                    </Typography>
                                </div>
                            </MenuItem>

                        </MenuList>
                    </Menu>
                </div>
            </div>
                    </div>
                )
                
                )
            }
        </div>
    );
};
