import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCarrito();
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    metodoPago: "",
    aclaraciones: "",
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar pedido a WhatsApp
  const enviarPedido = () => {
    if (cart.length === 0) return;

    let mensaje = `📦 *Nuevo Pedido* %0A%0A`;
    mensaje += `👤 Nombre: ${formData.nombre}%0A`;
    mensaje += `📍 Dirección: ${formData.direccion}%0A`;
    mensaje += `💳 Método de Pago: ${formData.metodoPago}%0A`;
    mensaje += `📝 Aclaraciones: ${formData.aclaraciones || "Ninguna"}%0A`;
    mensaje += `%0A🛒 *Productos:* %0A`;

    cart.forEach((item) => {
      mensaje += `- ${item.quantity}x ${item.name}: $${
        item.price * item.quantity
      }%0A`;
    });

    mensaje += `%0A💰 *Total: $${total}*`;

    // Número de WhatsApp (reemplázalo con tu número)
    const numeroWhatsApp = "5491164609581"; // Reemplazar con el real

    // Generar URL de WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Limpiar carrito después de enviar
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Tu Pedido 📋</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mb-2 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Cantidad: {item.quantity}</p>
                <p className="text-xl font-bold">
                  ${item.price * item.quantity}
                </p>
              </div>
              <button
                className="bg-black text-white px-3 py-1 rounded-md hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                ❌
              </button>
            </div>
          ))}

          {/* Mostrar total */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-lg mt-4 text-lg font-bold flex justify-between">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          {/* Botón para mostrar el formulario */}
          {!mostrarFormulario ? (
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => setMostrarFormulario(true)}
            >
              Pedir por WhatsApp 📲
            </button>
          ) : (
            <div className="bg-yellow-300 p-4 rounded-lg shadow-md w-full max-w-lg mt-4">
              <h2 className="text-xl font-bold mb-2">📋 Datos del Pedido</h2>

              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
              />

              <input
                type="text"
                name="direccion"
                placeholder="Dirección"
                value={formData.direccion}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
              />

              <select
                name="metodoPago"
                value={formData.metodoPago}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
              >
                <option value="">Selecciona un método de pago</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
              </select>

              <textarea
                name="aclaraciones"
                placeholder="Aclaraciones (opcional)"
                value={formData.aclaraciones}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-2"
              ></textarea>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full"
                onClick={enviarPedido}
              >
                Confirmar pedido por Whatsapp ✅
              </button>
            </div>
          )}

          {/* Botón para vaciar carrito */}
          <button
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900"
            onClick={clearCart}
          >
            Vaciar Carrito 🗑️
          </button>
        </>
      )}
    </div>
  );
};

export default Carrito;
