function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="Tarjeta">
      <img className="Foto" src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <button className="boton" onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
