import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout();
    }
 
    return (
        <div className='flex justify-between items-center px-6 md:px-8 py-4 border border-b'>
            <h2 className='logo font-bold  text-xl cursor-pointer'>EcoWander</h2>
            <div className='flex items-center gap-2'>
                <ul className='flex gap-4 justify-center items-center'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'} >Home</NavLink>
                    {
                        user && <div className='space-x-4'>
                            <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>Update Profile</NavLink>
                            <NavLink to='/profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>My Profile</NavLink>
                        </div>
                    }
                </ul>
                 
                {
                    user ? <button onClick={handleLogOut} className='btn'>Log out</button> : <Link to='/login' className='btn'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;