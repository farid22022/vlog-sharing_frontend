
import HomePage from "../pages/Home/HomePage.js";
import { RouteObject } from "react-router";
import HelloUser from "../pages/user/hellouser.js";
import BlogForm from "../pages/Home/VlogForm.js";

const UserRouter: RouteObject[] = [

    {

        path: "/",
        element: <HelloUser/>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path:"/form",
                element:<BlogForm/>
            }
        ]
    }
]


export default UserRouter;