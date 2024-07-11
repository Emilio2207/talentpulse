import React, { useEffect, useState } from "react";
import logo from "../../public/assets/logo.png";
import { Link } from "react-scroll";

// react icons
import { FaXmark, FaBars } from "react-icons/fa6";
import ModalForm from "./ModalForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  // navitems array
  const navItems = [
    { link: "Inicio", path: "home" },
    { link: "Servicio", path: "service" },
    { link: "Acerca de", path: "about" },
    { link: "Producto", path: "product" },
    { link: "Ventajas", path: "testimonial" },
    { link: "Nuestro Valor", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt=""
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">TALENTPULSE</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block cursor-pointer text-base text-gray900 hover:text-brandPrimary
              first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button
              onClick={toggleModal}
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300
            rounded hover:bg-neutralDGrey"
            >
              Contacto
            </button>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block cursor-pointer text-base text-white hover:text-neutralDGrey
              first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>

      <ModalForm isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default Navbar;
