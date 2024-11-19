import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsopen] = useState(false);

    const handleLogOut = () => {
        logout();
    }

    const handleMenu = () => {
        setIsopen(!isOpen)
    }

    const closeMenu = () => {
        setIsopen(false);
    }
 
    return (
        <div className='flex justify-between items-center px-6 md:px-8 py-4 border border-b'>
            <h2 className='logo font-bold  text-xl cursor-pointer'>EcoWander</h2>
            <div className='flex items-center gap-4 relative'>

                <ul className='hidden md:flex gap-4 justify-center items-center'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'} >Home</NavLink>
                    {
                        user && <div className='space-x-4'>
                            <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>Update Profile</NavLink>
                            <NavLink to='/profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>My Profile</NavLink>
                        </div>
                    }
                </ul>

                {/* <IoMenuSharp className='w-8 h-8' /> */}

                 
                <div className="dropdown md:hidden z-10">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu right-4 absolute z-11 menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2">
                       <NavLink to='/' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'} >Home</NavLink>
                        {
                            user && <div className='flex flex-col gap-2'>
                                <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>Update Profile</NavLink>
                                <NavLink to='/profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>My Profile</NavLink>
                            </div>
                        }
                  </ul>
                </div>


                {
                    user ? <button onClick={handleLogOut} className='btn border border-sky-600 rounded-none'>Log out</button> : <Link to='/login' className='btn border border-sky-600 rounded-none'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;