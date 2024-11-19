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
    console.log(isOpen)

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

                <button onClick={handleMenu} className='md:hidden flex justify-center items-center'>
                    {
                        isOpen 
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        :  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                           </svg>
                    }
                </button>
                
               
                {
                    isOpen && (
                        <div className='md:hidden absolute top-20 right-2 z-40 bg-opacity-75 bg-gray-700 backdrop-blur  p-4 w-auto rounded'>
                            <ul className='min-w-44 flex gap-2 flex-col flex-nowrap justify-center items-center text-center text-white'>
                                <NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-white'} >Home</NavLink>
                                {
                                    user && <div className='flex gap-2 flex-col text-white'>
                                        <NavLink to='/update-profile' onClick={closeMenu} className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-white'}>Update Profile</NavLink>
                                        <NavLink to='/profile' onClick={closeMenu} className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-white'}>My Profile</NavLink>
                                    </div>
                                }
                            </ul>
                        </div>
                    )
                }
              

                {
                    user ? <button onClick={handleLogOut} className='btn border border-sky-600 rounded-none'>Log out</button> : <Link to='/login' className='btn border border-sky-600 rounded-none'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;