import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  // Configuración del slider
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Repetir las diapositivas
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Mostrar una diapositiva a la vez
    slidesToScroll: 1, // Cuántas diapositivas se avanzan
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática
  };
  
  // Lista de banners
  const banners = [
    { src: "/banner-general1.png", alt: "Banner 1" },
    { src: "/banner-general2.png", alt: "Banner 2" },
    { src: "/banner-general3.png", alt: "Banner 3" },
    { src: "/banner-general4.png", alt: "Banner 4" },
    { src: "/banner-general5.png", alt: "Banner 5" },
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {banners.map((banner, index) => (
        <div key={index}>
          <img
            src={banner.src}
            alt={banner.alt}
            className="w-full h-[250px] object-cover"
            loading="lazy"
          />
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
