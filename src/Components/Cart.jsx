function Cart({ carrito }) {
  const total = carrito.reduce((acc, item) => acc + Number(item.precio), 0);

  return (
    <div className="">
      <h3>Carrito</h3>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
      <p>TOTAL: {total}</p>
    </div>
  );
}

export default Cart;
