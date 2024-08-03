import { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import TopBanner from "../TopCallBanner";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <TopBar />
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out  ${
          isScrolled ? "h-[120px] translate-y-[-10px]" : "h-[145px]"
        }`}
      >
        <div className="mt-2 mb-4 sm:mt-0 sm:mb-0">
          <TopBanner />
        </div>

        <nav
          className={` ${
            isScrolled ? "bg-purple-900 opacity-70" : "bg-purple-950 opacity-90"
          }  py-12 px-8 flex items-center justify-between gap-4`}
        >
          <div
            className={`flex items-center transition-transform duration-400 ${
              isScrolled ? "translate-y-0" : "-translate-y-1.5"
            }`}
          >
            <Link
              to="/"
              className="flex items-center text-white text-2xl font-extrabold "
            >
              <img
                src="/assets/logo (1).webp"
                alt="Logo"
                className="mr-3 inline-block align-middle"
              />
              <span className="mt-5 text-2xl tracking-widest font-pacifico">
                Skywayfares
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 ">
            <ul className="flex space-x-8 text-white text-sm font-semibold">
              <li>
                <Link
                  to="/"
                  className="relative group uppercase hover:bg-purple-500 p-4 "
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="relative group uppercase hover:bg-purple-500 p-4"
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className="relative group uppercase hover:bg-purple-500 p-4"
                >
                  offers
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="relative group uppercase hover:bg-purple-500 p-4"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  to="/termsConditions"
                  className="relative group uppercase hover:bg-purple-500 p-4"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative group uppercase hover:bg-purple-500 p-4"
                >
                  contact
                </Link>
              </li>
            </ul>
            <div className="hidden md:flex items-center border border-white rounded-md px-2 py-1 ml-4">
              <FaSearch size={20} className="text-white" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white outline-none ml-2 placeholder-white"
              />
            </div>
          </div>
          <div className="md:hidden relative">
            <button onClick={toggleMenu} className="text-white ml-6 mt-2">
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
                <div className="w-full px-6 mb-4">
                  <div className="flex items-center border border-black rounded-md px-2 py-1">
                    <FaSearch size={20} className="text-black" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent text-black outline-none ml-2 placeholder-black"
                    />
                  </div>
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
    </>
  );
};

export default Navigation;
