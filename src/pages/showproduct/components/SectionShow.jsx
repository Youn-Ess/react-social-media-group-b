import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";



const SectionShow = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [dataBase, setDataBase, connected, setConnected, allPostsDataBase, setAllPostsDataBase, marketPlaceDataBase, setMarketPlaceDataBase, storiesDataBase, setStoriesDataBase, allGroupsDataBase, setallGroupsDataBase] = useContext(MyContext)
  const [newData, setNewData] = useState(marketPlaceDataBase)
  const filter = newData.filter((newData) => newData.title == id)
  console.log(newData);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);


  return (
    <>
      <div className='absolute left-[30vw] top-[8vw] '>
        <section className=' '>
          <div className=' flex items-center'>{
            filter.map((element, index) =>
              <Card className="w-full max-w-[48rem] flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                  <img
                    src={element.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    startups
                  </Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2" >
                    {element.title}
                  </Typography>
                  <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {element.price}
                  </Typography>

                  <Typography color="gray" className="mb-8 font-normal">{element.description}
                  </Typography>
                  <a href="#" className="inline-block">
                    <Button onClick={handleOpen} variant="gradient">
                      shop now
                    </Button>
                  </a>
                </CardBody>
              </Card>
            )
          }

            {/* modal */}
            <div>

              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                <form action="" className='flex flex-col justify-evenly'>
                            <label htmlFor="">Name :</label>
                            <input className='rounded' type="text"  />
                            <label htmlFor="">Email :</label>
                            <input className='rounded' type="text"  />
                            <label htmlFor="">Adresse :</label>
                            <input className='rounded' type="text"  />
                            <label htmlFor="">Number Phone :</label>
                            <input className='rounded' type="text"  />
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
                  <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
          </div>

          

        </section>

      </div>
    </>
  );
};

export default SectionShow;