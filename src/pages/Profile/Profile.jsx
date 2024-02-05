import Header from "../../layouts/Header"
import { SideBare1 } from "../../layouts/sideBare1"
import { UserProfile } from "./components/UserProfile"


export const ProfilePage = () => {
    return (
        <>
            <Header />
            <SideBare1/> <UserProfile />
            
        </>
    )
}