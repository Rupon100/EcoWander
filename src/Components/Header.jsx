import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import userImg from '../assets/user(1).png'

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
            <Link to='/' className='logo font-bold  text-xl cursor-pointer'>EcoWander</Link>

            <ul className='hidden md:flex gap-4 justify-center items-center'>
                {/* <NavLink to='/' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'} >Home</NavLink> */}
                <NavLink to='/' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none flex justify-center items-center gap-1' : 'text-black p-2 flex justify-center items-center gap-1'} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <h4>Home</h4>
                </NavLink>
                {
                    user && <div className='space-x-4 flex'>
                        <NavLink to='/profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none flex justify-center items-center gap-1' : 'text-black p-2 flex justify-center items-center gap-1'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h4>Profile</h4>
                        </NavLink>
                        <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none flex justify-center items-center gap-1' : 'text-black p-2 flex justify-center items-center gap-1'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            <h4>Update Profile</h4>
                        </NavLink>
                    </div>
                }
            </ul>

            <div className='flex items-center gap-4 relative'>
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
                            <ul className='min-w-44 flex gap-4 flex-col flex-nowrap justify-center items-center text-center text-white'>
                                <NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none flex justify-center gap-1 items-center' : 'text-white flex gap-1 justify-center items-center'} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <h4>Home</h4>
                                </NavLink>
                                {
                                    user && <div className='flex gap-4 flex-col text-white'> 
                                        <NavLink to='/profile' end onClick={closeMenu} className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none flex gap-1 justify-center items-center' : 'text-white p-2 flex gap-1 justify-center items-center'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                            </svg>
                                            <h4>Profile</h4>
                                        </NavLink>
                                        <NavLink to='/update-profile' end onClick={closeMenu} className={({ isActive }) => isActive ? 'bg-sky-600 p-2 text-white p-2 rounded-md border-none flex gap-1 justify-center items-center' : 'text-white p-2 flex gap-1 justify-center items-center'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            <h4>Update Profile</h4>
                                        </NavLink>
                                    </div>
                                }
                            </ul>
                        </div>
                    )
                }
                
                {
                    user 
                    ? <button onClick={handleLogOut} className='btn border-[2px] bg-gray-50 border-sky-600 rounded-md'>
                        Log out
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                        </button> 
                    : <Link to='/login' className='btn border-[2px] bg-gray-50 border-sky-600 rounded-md'>
                        Login
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                       </Link>
                }

                <div>
                    {
                        user 
                        ? <div title={user.displayName} className="ring-text-sky-700 ring-offset-base-100 w-10 rounded-full ring ring-offset-2 cursor-pointer">
                            <img className="w-10 h-10 border rounded-full object-cover" src={user.photoURL} alt="user profile" />
                          </div>
                        : <div>
                            <img title='No User!' className='w-10 h-10 object-cover' src={userImg} alt="user default" />
                          </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;