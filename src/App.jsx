import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";
import Remeraimg from "./assets/remera.webp";
import Pantalonimg from "./assets/pantalon.webp";
import Zapatillasimg from "./assets/zapatilla.jpg";
import Cart from "./Components/Cart";

import "./App.css";

function App() {
  const productos = [
    { id: 1, nombre: "Remera", precio: 1200, imagen: Remeraimg },
    { id: 2, nombre: "Pantalón", precio: 2000, imagen: Pantalonimg },
    { id: 3, nombre: "Zapatillas", precio: 6500, imagen: Zapatillasimg },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div>
      <div className="container">
        <div>
          <Header />
        </div>
        <div className="prodcarrt">
          <div className="prod">
            <ProductList
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          </div>
          <div className="carrt">
            <Cart carrito={carrito} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
