import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/grafitacna-logo.png"
            alt="GrafiTacna Logo"
            className="h-28 w-auto filter invert brightness-0"
          />
          <p className="text-sm mt-4 text-center md:text-left">
            Copyright 2024 © GRAFITACNA 
            Todos los derechos reservados.
          </p>
        </div>

        {/* Categories Section */}
        <div className="col-span-0">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Categorías</h2>
          <ul className="space-y-2 text-center md:text-left">
            <a href="/categorias/procesadores">
              <li>Procesadores</li>
            </a>
            <a href="/categorias/impresoras">
              <li>Impresoras</li>
            </a>
            <a href="/categorias/perifericos">
              <li>Periféricos</li>
            </a>  
            <a href="/categorias/monitores">
              <li>Monitores</li>
            </a>
            <a href="/categorias/tintas">
              <li>Tintas</li>
            </a>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Redes Sociales</h2>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-green-500">
              <FaWhatsapp size={24} />
            </a>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Contacto</h2>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-green-400">WhatsApp: 952 606 981</li>
              <li className="text-green-400">WhatsApp: 981 136 159</li>
              <li>Pampa: J.C. Mariategui Mz L Lote 14</li>
              <li>Puerto: Av. Mariano Lino Urquieta N°110</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
