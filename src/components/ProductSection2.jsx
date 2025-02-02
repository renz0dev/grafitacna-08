import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick"; // Carrusel
import ProductItem from "./ProductItem";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSection2 = () => {
  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    const token = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!token || !apiUrl) {
      setError("Error interno del servidor.");
      setLoading(false);
      return;
    }

    axios
      .get(`${apiUrl}?category=3`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        const data = response.data.results || response.data || [];
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Formato inesperado.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los productos.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-[#f6f6f6]">
      <div className="container mx-auto px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="relative w-[264px] h-[414px] aspect-square rounded-lg overflow-hidden bg-black">
              <div className="absolute inset-0 bg-[#00B5D8] rounded-lg" />
              <NavLink to="/categorias/tintas">
                <img
                  src="/new-tinta.jpg"
                  alt="Lo nuevo en Tintas"
                  className="absolute inset-0 w-full h-full object-cover w-full h-full object-contain hover:scale-110 transition ease-in-out"
                />
              </NavLink>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-black mb-8 px-8">Tintas</h2>
            <div className="px-4">
              <Slider {...settings}>
                {products.map((product) => (
                  <div key={product.id} className="p-2">
                    <ProductItem
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      stock={product.stock}
                      sku={product.sku}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection2;
