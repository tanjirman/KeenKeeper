// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// Import everything from 'lucide-react' in one line
import { Home, Clock, Menu, ChartNoAxesCombined } from 'lucide-react';

const Navbar = () => {
  // Use a Fragment shortcut <>...</> to group the links
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "bg-green-800 text-white" : "text-gray-600")}>
          <Home size={18} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/timeline" className={({ isActive }) => (isActive ? "bg-green-800 text-white" : "text-gray-600")}>
          <Clock size={18} /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink to="/stats" className={({ isActive }) => (isActive ? "bg-green-800 text-white" : "text-gray-600")}>
          <ChartNoAxesCombined size={18} /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-4 md:px-8 fixed top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu size={24} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52 ">
            {navLinks}
          </ul>
        </div>

        <h2 className="text-xl font-bold tracking-tight text-slate-800 ml-2">Keen<span className='text-green-800'>Keeper</span> </h2>
      </div>
      
      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-gray-500 font-medium">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;