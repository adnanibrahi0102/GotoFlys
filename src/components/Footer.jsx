import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DISCLAIMER</h3>
            <p className="text-sm">
              gotoflys.com is a registered brand name of My Fly Support LLC located at 30 N Gould St R Sheridan, WY 82801, USA which is an international tour & travel company.
              We are not affiliated with any airline companies. We are an independent tour & travel company.
            </p>
            <div className="flex mt-4 space-x-4">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaBehance />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">BLOG POSTS</h3>
            <ul className="space-y-4">
              <li>
                <img src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post 1" className="w-12 h-12 object-cover inline-block mr-2" />
                <div className="inline-block align-middle">
                  <Link to="/blogs" className="text-sm hover:underline">Travel with us this year</Link>
                  <p className="text-xs text-orange-400">March 19, 2024</p>
                </div>
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post 2" className="w-12 h-12 object-cover inline-block mr-2" />
                <div className="inline-block align-middle">
                  <Link to="/blogs" className="text-sm hover:underline">Exploring Hidden Gems Around the World</Link>
                  <p className="text-xs text-orange-400">Feb 25, 2024</p>
                </div>
              </li>
              <li>
                <img src="https://images.unsplash.com/photo-1523568129082-a8d6c095638e?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Post 3" className="w-12 h-12 object-cover inline-block mr-2" />
                <div className="inline-block align-middle">
                  <Link to="/blogs" className="text-sm hover:underline">Essential Packing Tips for Your Next Adventure</Link>
                  <p className="text-xs text-orange-400">Jan 29, 2024</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">TAGS</h3>
            <div className="flex justify-evenly flex-col gap-2">
              <Link to="/" className="border border-orange-400 text-orange-400 px-2 py-1 rounded block">Terms & Conditions</Link>
              <Link to="/" className="border border-orange-400 text-orange-400 px-2 py-1 rounded block">Privacy Policy</Link>
              <Link to="/" className="border border-orange-400 text-orange-400 px-2 py-1 rounded block">About us</Link>
              <Link to="/" className="border border-orange-400 text-orange-400 px-2 py-1 rounded block">Contact us</Link>
              <Link to="/" className="border border-orange-400 text-orange-400 px-2 py-1 rounded block">Offers</Link>
              <Link to="/" className="border border-orange-400 text-orange-400 px-2 py-1 rounded block">Blog</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <HiLocationMarker />
                <span className="text-sm">30 N Gould St R Sheridan, WY 82801, USA</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiPhone />
                <span className="text-sm">(888-300-4143)</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiMail />
                <span className="text-sm">support@GotoFlys.com</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-black p-3 text-center text-xs text-gray-400">
        <p className="mb-2">Copyright © 2024 My Fly Support LLC. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">home</Link>
          <Link to="/about" className="hover:underline">about us</Link>
          <Link to="/offers" className="hover:underline">offers</Link>
          <Link to="/blog" className="hover:underline">blog</Link>
          <Link to="/contact" className="hover:underline">contact</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
