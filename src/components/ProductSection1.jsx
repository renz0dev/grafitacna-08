import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick"; // Importamos el carrusel
import ProductItem from "./ProductItem"; // Asegúrate de que esté importado correctamente
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSection1 = () => {
  const [products, setProducts] = useState([]); // Estado para guardar los productos
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const token = "5e58a170a0b599511b621cbe713a18540ea4710a";
    axios
      .get("http://127.0.0.1:8000/api/products/?category=1", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        setProducts(response.data.results || response.data || []);
        setLoading(false);
      })
      .catch((error2) => {
        console.error(
          "Error al cargar los productos:",
          error2.response?.data || error2.message
        );
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar 4 productos
    slidesToScroll: 1,
    autoplay: true, // Mover automáticamente
    autoplaySpeed: 3000, // Cada 3 segundos
    arrows: true, // Flechas para navegar
    responsive: [
      {
        breakpoint: 1024, // Para pantallas más pequeñas
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Para pantallas aún más pequeñas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Para móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-[#f6f6f6]">
      <div className="container mx-auto px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar Banner */}
          <div className="lg:col-span-1">
            <div className="relative w-[264px] h-[414px] aspect-square rounded-lg overflow-hidden bg-black">
              <div className="absolute inset-0 bg-[#00B5D8] rounded-lg" />
              <NavLink to="/categorias/impresoras">
                <img
                  src="/impresora-rectangulo.jpg"
                  alt="Lo nuevo en impresoras"
                  className="absolute inset-0 w-full h-full object-cover object-contain hover:scale-110 transition ease-in-out"
                />
              </NavLink>
            </div>
          </div>

          {/* Products Carousel */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-black mb-8 px-8">Impresoras</h2>
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

export default ProductSection1;
