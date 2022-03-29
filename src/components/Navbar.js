import React from 'react';
import globeIcon from '../globe.png';

const Navbar = () => {
  return (
    <nav className="bg-red flex justify-center items-center py-5">
      <img src={globeIcon} className="mr-2" alt="" />
      <span className="text-white">my travel journal.</span>
    </nav>
  );
};

export default Navbar;
