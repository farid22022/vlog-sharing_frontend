import { Navigate} from "react-router"
import { getUser, isUserAuthenticated } from "../utility/auth"

interface props{
    children: React.ReactNode
}
export default function AdminRequired({children}: props) {
    if(isUserAuthenticated() && getUser()?.is_staff){
        return children
    }

    return (
        <Navigate to="/login" />
    )

}