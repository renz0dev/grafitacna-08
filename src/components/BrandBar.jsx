import React from "react";

const BrandBar = () => {
  // Lista de rutas de las imágenes
  const logos = [
    "/logo/Intel-logo2.png",
    "/logo/amd-logo2.png",
    "/logo/nvidia-logo.png",
    "/logo/brother-svg.svg",
    "/logo/epson-svg.svg",
    "/logo/canon-logo.png",
    "/logo/hp-webp.webp",
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.marquee}>
        {/* Primera fila de logos */}
        {logos.map((logo, index) => (
          <img
            key={`original-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={styles.logo}
          />
        ))}
        {/* Segunda fila duplicada con separación */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Logo ${index + 1}`}
            style={styles.logo}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    overflow: "hidden", // Oculta los logos fuera del contenedor
    width: "100%",
    backgroundColor: "#FFD700", // Fondo amarillo
    padding: "10px 0",
  },
  marquee: {
    display: "flex",
    gap: "40px", // Espaciado entre los logos
    animation: "scroll 20s linear infinite", // Animación suave y continua
  },
  logo: {
    height: "50px", // Ajusta el tamaño del logo
    objectFit: "contain",
    width: "auto",
  },
};

// Agrega la animación con espacio adecuado entre duplicados
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } /* Mueve solo la mitad para un loop continuo */
  }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default BrandBar;
