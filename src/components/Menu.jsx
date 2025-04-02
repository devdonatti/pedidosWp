import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Hamburguesa",
    description: "Deliciosa hamburguesa",
    price: 10000,
    image: "/meltt.png",
  },
  {
    id: 2,
    name: "Hamburguesa doble cheddar",
    description:
      "Deliciosa hamburguesa doble cheddar, con lechuga y cebolla morada",
    price: 11000,
    image: "/burgerdoble.png",
  },
  {
    id: 3,
    name: "Hamburguesa triple ",
    description:
      "Deliciosa hamburguesa triple con cheddar, con lechuga y cebolla morada",
    price: 11000,
    image: "/burgerdoble.png",
  },
  {
    id: 4,
    name: "Papas Fritas",
    description: "Bastones de papas fritas con pimenton dulce",
    price: 11000,
    image: "/original.png",
  },
  {
    id: 5,
    name: "Hamburguesa doble cheddar",
    description:
      "Deliciosa hamburguesa doble cheddar, con lechuga y cebolla morada",
    price: 11000,
    image: "/burgerdoble.png",
  },
  {
    id: 6,
    name: "Hamburguesa doble cheddar",
    description:
      "120g - Hamburguesa simple, pan de papa, medallón de carne con doble cheddar. Incluye papas simples",
    price: 11000,
    image: "/burgerdoble.png",
  },
  {
    id: 7,
    name: "Hamburguesa doble cheddar",
    description:
      "Deliciosa hamburguesa doble cheddar, con lechuga y cebolla morada",
    price: 11000,
    image: "/burgerdoble.png",
  },
];

const Menu = ({ addToCart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 space-y-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;
