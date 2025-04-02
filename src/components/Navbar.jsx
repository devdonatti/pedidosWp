import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext"; // Importamos el contexto
import { ShoppingBag } from "lucide-react"; // Importamos el icono de la bolsa

const Navbar = () => {
  const { totalItems } = useCarrito(); // Obtenemos la cantidad total de productos en el carrito
  return (
    <nav className="bg-green-700 p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo absolutamente centrado */}
        <Link to="/" className="flex items-center">
          <img
            src="/logoburger.png"
            alt="logo"
            className="h-12 absolute left-1/2 transform -translate-x-1/2"
          />
        </Link>

        {/* Carrito alineado a la derecha */}
        <div className="ml-auto relative">
          <Link
            to="/carrito"
            className="text-white text-lg font-semibold flex items-center relative"
          >
            <ShoppingBag size={28} className="mr-2" /> {/* Ícono de bolsa */}
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
