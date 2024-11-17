
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-6 md:px-8 py-4'>
            <h2 className='logo font-bold  text-xl cursor-pointer'>EcoWander</h2>
            <div className='flex items-center gap-2'>
                <ul className='flex gap-4 justify-center items-center'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'} >Home</NavLink>
                    <NavLink to='/update-profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>Update Profile</NavLink>
                    <NavLink to='/profile' className={({ isActive }) => isActive ? 'bg-sky-600 text-white p-2 rounded-md border-none' : 'text-black'}>User Profile</NavLink>
                </ul>
                {/* <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div> */}
                <button className='btn'>Login</button>
            </div>
        </div>
    );
};

export default Header;