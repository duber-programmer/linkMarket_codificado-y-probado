import React from 'react'

export default function ProductItem({ product, onEdit, onDelete }) {

  const role = localStorage.getItem("userRole")

  return (
    <div className="card">

      {/* 🔥 Imagen con contenedor fijo */}
      <div className="product-image-container">
        <img
          src={product.imageUrl || 'https://via.placeholder.com/300x180?text=Sin+imagen'}
          alt={product.name}
        />
      </div>

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="muted">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>

        {role === "vendedor" && (
          <div className="card-actions">
            <button className="btn edit" onClick={() => onEdit(product)}>Editar</button>
            <button className="btn delete" onClick={() => onDelete(product.id)}>Eliminar</button>
          </div>
        )}
      </div>

    </div>
  )
}
