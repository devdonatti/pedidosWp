import React from "react";
import "./Background.css"; // Asegúrate de que está bien importado

const Background = () => {
  return (
    <div className="background-container">
      {[...Array(20)].map((_, index) => (
        <img
          key={index}
          src="/burgerdoble.png" // Asegúrate de tener la imagen en public/
          alt="Hamburguesa"
          className="floating-burger"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      {[...Array(10)].map((_, index) => (
        <img
          key={index}
          src="/papassss.png" // Asegúrate de tener la imagen en public/
          alt="Hamburguesa"
          className="floating-papas"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
