import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCarrito();
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  // Manejar el agregado al carrito con notificación
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowNotification(true); // Mostrar la notificación

    // Ocultar la notificación después de 2 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="relative bg-yellow-300 p-4 rounded-lg shadow-md flex items-center justify-between w-full max-w-lg">
      {/* Notificación */}
      {showNotification && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-3 py-1 rounded-md">
          Producto agregado ✅
        </div>
      )}

      <div className="flex-1 pr-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>

        <div className="mt-3 flex items-center">
          {/* Contador */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-l"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-r"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Botón agregar */}
          <button
            className="ml-3 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={handleAddToCart}
          >
            Pedir
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-30 h-30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductCard;
