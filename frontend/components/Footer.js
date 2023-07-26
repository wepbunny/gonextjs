import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
