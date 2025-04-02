import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Carrito from "./pages/Carrito";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"; // ❌ NO IMPORTES BrowserRouter
import { CarritoProvider } from "./context/CarritoContext";

function App() {
  return (
    <CarritoProvider>
      <Background />
      <Navbar />

      <div className="bg-yellow min-h-screen overflow-x-hidden w-full">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>

      <Footer />
    </CarritoProvider>
  );
}

export default App;
