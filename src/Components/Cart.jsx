import { useState } from "react";
import Carritoimg from "../assets/carritoimg.png";

function Cart({ carrito }) {
  const total = carrito.reduce((acc, item) => acc + Number(item.precio), 0);

  return (
    <div className="carrit">
      <div>
        {carrito.length === 0 ? (
          <p>
            {" "}
            <img src={Carritoimg} alt="Carrito img" /> <br />
            Carrito vacío
          </p>
        ) : (
          <>
            <h3>
              {" "}
              <img src={Carritoimg} alt="Carrito img" /> <br />
              Carrito
            </h3>
            <ul>
              {carrito.map((producto) => (
                <li key={producto.id}>{producto.nombre}</li>
              ))}
            </ul>
            <p>TOTAL: {total}</p>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
