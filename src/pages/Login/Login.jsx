import { useContext } from "react";
import { MyContext } from "../../utils/contextProvider";

import { Input } from "@material-tailwind/react";



export const LoginPage = () => {
    const [dataBase, setDataBase] = useContext(MyContext)
    console.log(dataBase);





    return (
        <>
            {/* <div className="bg-[#2a76e7] ">
                <div className="w-[80%] ">
                    <div className="">
                        <h1>LOGO</h1>
                        <p>description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatem.</p>
                    </div>

                    <form action="">
                        <label htmlFor="">Email</label>
                        
                    </form>
                </div>
            </div> */}
            <div className="w-72">
                <Input label="Username" />
            </div>




        </>
    )
}