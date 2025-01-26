import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { GiProcessor } from "react-icons/gi";
import { BsMotherboard, BsMouse } from "react-icons/bs";
import { CiMonitor, CiLaptop } from "react-icons/ci";
import { RiInkBottleLine } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detecta si el usuario se desplazó hacia abajo
      if (window.scrollY > 100) {
        setIsVisible(true); // Muestra la barra
      } else {
        setIsVisible(false); // Oculta la barra
      }
    };

    // Agrega un evento para escuchar el desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-cyan-500 sticky top-0 z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 justify-normal relative">
          <div
            className="flex items-center gap-2 text-white px-4 h-full bg-black relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Menu className="w-5 h-5" />
            <span className="font-[Itim]">Todas las Categorías</span>

            {/* Lista desplegable */}
            <div
              className={`absolute left-0 top-full bg-[#f6f6f6] shadow-lg rounded-lg w-56 overflow-hidden transition-all duration-300 ease-in-out z-50 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                  <NavLink
                    to="/categorias/procesadores"
                    className="flex items-center gap-2"
                  >
                    <GiProcessor size={20} />
                    Procesadores
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                  <NavLink
                    to="/categorias/impresoras"
                    className="flex items-center gap-2"
                  >
                    <BsMotherboard size={20} />
                    Impresoras
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                  <NavLink
                    to="/categorias/perifericos"
                    className="flex items-center gap-2"
                  >
                    <BsMouse size={20} />
                    Periféricos
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                  <NavLink
                    to="/categorias/monitores"
                    className="flex items-center gap-2"
                  >
                    <CiMonitor size={20} />
                    Monitores
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                  <NavLink
                    to="/categorias/tintas"
                    className="flex items-center gap-2"
                  >
                    <RiInkBottleLine size={20} />
                    Tintas
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">
                  <NavLink
                    to="/categorias/laptops"
                    className="flex items-center gap-2"
                  >
                    <CiLaptop size={20} />
                    Laptops
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center ml-4 px-4 font-[Itim]">
            <NavLink
              to="/"
              className="text-white h-full flex items-center hover:text-black transition duration-300"
            >
              Inicio
            </NavLink>
          </div>
          <div className="flex items-center ml-4 px-4 font-[Itim]">
            <NavLink
              to="/categorias/perifericos"
              className="text-white h-full flex items-center hover:text-black transition duration-300"
            >
              Periféricos
            </NavLink>
          </div>
          <div className="flex items-center ml-4 px-4 font-[Itim]">
            <NavLink
              to="/categorias/tintas"
              className="text-white h-full flex items-center hover:text-black transition duration-300"
            >
              Tintas
            </NavLink>
          </div>
          <div className="flex items-center ml-4 px-4 font-[Itim]">
            <NavLink
              to="/categorias/laptops"
              className="text-white h-full flex items-center hover:text-black transition duration-300"
            >
              Laptops
            </NavLink>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <a href="#mapa" className="flex items-center justify-center">
              <button className="flex items-center justify-center bg-white text-black w-36 h-10 rounded-full m-1 font-[Itim] hover:bg-neutral-200 duration-300">
                <FaMapMarkedAlt size={20} className="mr-4" />
                Ubícanos
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
