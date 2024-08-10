import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="md:hidden sticky top-0 left-0 right-0 z-50">
      <nav className="bg-transparent opacity-90 py-1 px-2 flex items-center justify-between ">
        <div className="relative">
          <button onClick={toggleMenu} className="text-black mt-2 ">
            <FaBars size={24} />
          </button>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 flex flex-col items-center justify-center z-40 opacity-95 h-screen">
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={toggleMenu}
              >
                <IoIosClose size={30} className="text-black" />
              </div>
              <div className="text-center mb-8">
                <a
                  href="#"
                  className="text-2xl text-black font-bold font-pacifico tracking-wider"
                >
                  Skywayfares
                </a>
              </div>
              <ul className="space-y-4 text-black font-bold font-pacifico">
                <li>
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className="text-3xl font-normal hover:underline"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    onClick={toggleMenu}
                    className="text-3xl font-normal hover:underline"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offers"
                    onClick={toggleMenu}
                    className="text-3xl font-normal hover:underline"
                  >
                    offers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    onClick={toggleMenu}
                    className="text-3xl font-normal hover:underline"
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termsConditions"
                    onClick={toggleMenu}
                    className="text-3xl font-normal hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="text-3xl font-normal hover:underline"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MobileNavigation;
