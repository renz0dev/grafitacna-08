import React, { memo } from "react";
import { FaWhatsapp, FaFacebookF, FaClock } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Header = memo(() => (
  <header>
    {/* Barra superior */}
    <div className="bg-yellow-400 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <span className="text-black font-[Itim] text-xl ">
            ¡Visita nuestras redes sociales!
          </span>
          <a href="https://m.facebook.com/people/GrafiTacna-ILO/100089300966888/" className="text-black hover:text-blue-600">
            <FaFacebookF size={24} />
          </a>
          <a href="https://wa.me/952606981" className="text-black hover:text-green-600">
            <FaWhatsapp size={24} />
          </a>
        </div>
        <div className="flex items-center text-black space-x-1 font-[Itim]">
          <FaClock size={20} />
          <span>Lunes a Sábado 9am a 8pm</span>
        </div>
      </div>
    </div>
    {/* Barra de navegación */}
    <div className="bg-[#f6f6f6] py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src="/grafitacna-logo.png" alt="Logo GrafiTacna" className="h-[81px] w-[106px]" loading="lazy" />
        </NavLink>
        <p className="text-center text-3xl text-black animate-bounce font-[Itim]">
          ¡Bienvenidos a GrafiTacna! Encuentra lo mejor en tecnología
        </p>
        <div className="flex items-center space-x-2 font-itim">
          <MdOutlinePermPhoneMsg className="text-black" size={25} />
          <div className="flex flex-col items-start">
            <span className="text-gray-700 font-semibold text-sm font-[Itim]">Escríbenos</span>
            <p className="text-blue-600 text-sm font-[Itim]">952 606 981</p>
          </div>
        </div>
      </div>
    </div>
  </header>
));

export default Header;
