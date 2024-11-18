import { createBrowserRouter } from "react-router-dom"
import MainLayout from './../MainLayout/MainLayout';
import Home from "../Components/Home";
import UpdateProfile from "../Components/UpdateProfile";
import Profile from "../Components/Profile";
import Details from "../Experiances/Details";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../AuthProvider/PrivateRoute";

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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/experiances/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: async({ params }) => {
                    const res = await fetch('/data.json');
                    const data = await res.json();
                    const singleDetails = data.find(d => d.id == params.id);
                    return singleDetails;
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
    
       path: '*',
       element: <ErrorPage></ErrorPage>
    
    }

])

export default router;