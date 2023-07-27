import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/" className="hover:text-blue-500">Products</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
