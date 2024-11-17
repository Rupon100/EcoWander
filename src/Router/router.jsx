import { createBrowserRouter } from "react-router-dom"
import MainLayout from './../MainLayout/MainLayout';
import Home from "../Components/Home";
import UpdateProfile from "../Components/UpdateProfile";
import Profile from "../Components/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/update-profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },

])

export default router;