import React from "react";
import { FaPinterest, FaFacebook, FaTwitter, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-purple-950 py-2 ">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <a href="tel:8883004143" >
            <div className="text-white mr-4 text-sm">(888-300-4143)</div>
          </a>
          <div >
            <ul className="flex space-x-4 gap-2 ">
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <FaPinterest />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <FaBehance />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-gray-400">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <div className="flex space-x-4">
              <div >
                <a href="#" className="text-gray-200 hover:text-gray-400 text-sm">Login</a>
              </div>
              <span className="text-gray-200">|</span>
              <div >
                <a href="#" className="text-gray-200 hover:text-gray-400 text-sm">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
