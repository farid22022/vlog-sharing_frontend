import { Outlet } from "react-router";
// import NavBar from "../../SharedComponents/NavBar/NabBar";


export default function HelloUser(){
    return (
        <div className=" border-2 border-blue-300 " >
            {/* <h1 className="underline">hello user</h1> */}
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
        </div>
    )
}