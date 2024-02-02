import { useContext } from "react";
import { MyContext } from "../../utils/contextProvider";

export const LoginPage = () => {
    const [dataBase, setDataBase] = useContext(MyContext)
    console.log(dataBase);

    return (
        <>
            <h1>login page</h1>
        </>
    )
}